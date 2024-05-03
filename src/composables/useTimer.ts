import { useIntervalFn } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';

/* isoDateString format: 2023-04-07T09:08:36.0Z */
export function useTimer(
  isoDateString: string,
  options: { autostart?: boolean; countUp?: boolean } = {
    autostart: true,
    countUp: false,
  },
) {
  const parsedDate = computed(() =>
    /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/.test(
      isoDateString,
    )
      ? new Date(isoDateString).getTime() / 1000
      : 0,
  );

  const date1 = ref<number>(0);
  const date2 = ref<number>(0);

  function setDates() {
    if (options?.countUp) {
      date1.value = Math.trunc(new Date().getTime() / 1000);
      date2.value = parsedDate.value;
    } else {
      date1.value = parsedDate.value;
      date2.value = Math.trunc(new Date().getTime() / 1000);
    }
  }

  const ended = computed(() => date1.value <= date2.value);

  const seconds = computed(() =>
    ended.value ? 0 : (date1.value - date2.value) % 60,
  );

  const minutes = computed(() =>
    ended.value ? 0 : Math.trunc((date1.value - date2.value) / 60) % 60,
  );

  const hours = computed(() =>
    ended.value ? 0 : Math.trunc((date1.value - date2.value) / 60 / 60) % 24,
  );

  const days = computed(() =>
    ended.value ? 0 : Math.trunc((date1.value - date2.value) / 60 / 60 / 24),
  );

  const { pause, resume, isActive } = useIntervalFn(setDates, 1000, {
    immediate: options.autostart,
  });

  onMounted(setDates);

  return {
    pause,
    resume,
    isActive,
    ended,
    seconds,
    minutes,
    hours,
    days,
  };
}

export function zerofi(value: number) {
  return value < 10 ? `0${value}` : value;
}
