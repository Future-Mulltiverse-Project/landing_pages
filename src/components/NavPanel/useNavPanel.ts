import { ref } from '#imports';

const visible = ref(false);

export function useNavPanel() {
  function open() {
    visible.value = true;
  }

  function close() {
    visible.value = false;
  }

  function toggle() {
    visible.value = !visible.value;
  }

  return {
    visible,
    open,
    close,
    toggle,
  };
}
