<template>
  <Transition
    :enter-active-class="$style.enterActive"
    :leave-active-class="$style.leaveActive"
    :enter-from-class="$style.enterFrom"
    :leave-to-class="$style.leaveTo"
  >
    <div v-if="visible" :class="$style.el" @click="close"></div>
  </Transition>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, watch } from '#imports';
import { useNavPanel } from '~/components/NavPanel/useNavPanel';

const { visible, close } = useNavPanel();

function onKeyUpEsc(event: KeyboardEvent) {
  if (event.keyCode === 27 || event.code === 'Escape') {
    close();
  }
}

function enable() {
  document.body.style.overflow = 'hidden';
  document.addEventListener('keyup', onKeyUpEsc);
}

function disable() {
  document.removeEventListener('keyup', onKeyUpEsc);
  document.body.style.overflow = '';
}

watch(visible, () => {
  visible.value ? enable() : disable();
});

onBeforeUnmount(disable);
</script>

<style lang="scss" module>
.el {
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: z('modal-backdrop');
}

.enterActive,
.leaveActive {
  transition: opacity 300ms ease-in-out;
}

.enterFrom,
.leaveTo {
  opacity: 0;
}
</style>
