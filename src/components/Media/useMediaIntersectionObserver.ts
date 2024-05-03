import {
  MaybeElementRef,
  noop,
  unrefElement,
  useSupported,
} from '@vueuse/core';
import { onBeforeUnmount, watch } from '#imports';

type Callback = (
  entry: IntersectionObserverEntry,
  unobserve: () => void,
) => void;

let observer: IntersectionObserver | null = null;
const cachedRecords: { el: Element; callback: Callback }[] = [];

function unobserve(el: Element) {
  observer?.unobserve(el);
  const cachedRecordIndex = cachedRecords.findIndex(
    (cachedRecord) => cachedRecord.el === el,
  );
  if (cachedRecordIndex !== -1) {
    cachedRecords.splice(cachedRecordIndex, 1);
  }
}

function getIntersectionObserver() {
  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const cachedRecordIndex = cachedRecords.findIndex(
          (cachedRecord) => cachedRecord.el === entry.target,
        );
        const cachedRecord = cachedRecords[cachedRecordIndex];

        if (cachedRecord) {
          cachedRecord.callback(entry, () => unobserve(entry.target));
        }
      }
    });
  }

  return observer;
}

export function useMediaIntersectionObserver({
  elRef,
  cacheId,
  callback,
}: {
  elRef: MaybeElementRef;
  cacheId: () => string;
  callback: Callback;
}) {
  const isSupported = useSupported(
    () => typeof window !== 'undefined' && 'IntersectionObserver' in window,
  );

  let cleanup = noop;

  const stopWatch = isSupported.value
    ? watch(
        [cacheId, () => unrefElement(elRef)],
        ([newSrc, newEl], [_, oldEl]) => {
          if (oldEl) {
            unobserve(oldEl);
          }

          if (newEl && newSrc) {
            const observer = getIntersectionObserver();

            observer.observe(newEl);

            cachedRecords.push({
              el: newEl,
              callback,
            });

            cleanup = () => {
              unobserve(newEl);
              cleanup = noop;
            };
          }
        },
        {
          immediate: true,
          flush: 'post',
        },
      )
    : noop;

  const disconnect = () => {
    cleanup();
    stopWatch();
  };

  onBeforeUnmount(disconnect);

  return {
    isSupported,
    unobserve,
    disconnect,
  };
}
