<template>
  <div class="form-group">
    <label
      :for="name"
      :class="['form-label', { 'visually-hidden': labelHidden }]"
    >
      {{ label }}
      <span v-if="required" class="form-asterisk">*</span>
    </label>
    <slot></slot>
    <div v-if="hasError" class="invalid-feedback">{{ errorMessage }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate';
import { computed, toRef } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  labelHidden: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const label = toRef(props, 'label');
const name = toRef(props, 'name');

const { errorMessage, meta } = useField(name, undefined, { label });

const hasError = computed(() => errorMessage.value && meta.touched);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
