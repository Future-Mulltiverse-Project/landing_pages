<template>
  <div class="form-group">
    <label
      :for="name"
      :class="['form-label', { 'visually-hidden': labelHidden }]"
    >
      {{ label }}
      <span v-if="isRequired" class="form-asterisk">*</span>
    </label>
    <div class="input-group">
      <div v-if="$slots.prepend" class="input-group-prepend">
        <slot name="prepend" />
      </div>
      <input
        :id="name"
        class="form-control"
        :class="hasError && 'is-invalid'"
        :name="name"
        :type="type"
        :value="value"
        :maxlength="rules?.max || null"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
      />

      <div v-if="hasError" class="invalid-feedback">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate';
import { computed, toRef } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
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
  field: {
    type: String,
    default: '',
  },
  rules: {
    type: [String, Object],
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
});

const label = toRef(props, 'label');
const name = toRef(props, 'name');
const rules = toRef(props, 'rules');
const isRequired = computed(() =>
  typeof rules.value === 'string'
    ? rules.value.includes('required')
    : !!rules.value.required,
);

const fieldLabel = computed(() => (props.field ? props.field : props.label));

const { value, errorMessage, handleBlur, handleChange, meta } = useField(
  name,
  rules,
  { label: fieldLabel },
);

const hasError = computed(() => errorMessage.value && meta.touched);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
