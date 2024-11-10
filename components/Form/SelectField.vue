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
      <Multiselect
        :value="value"
        :class="hasError && 'multiselect-is-invalid'"
        :options="options"
        :placeholder="placeholder"
        :searchable="searchable"
        @change="handleChange"
        @blur="handleBlur"
      />
      <div v-if="hasError" class="invalid-feedback">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Multiselect from '@vueform/multiselect';
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
    default: 'Select',
  },
  options: {
    type: Array,
    required: true,
  },
  searchable: {
    type: Boolean,
    default: false,
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

<style lang="scss">
@import 'assets/styles/vars.scss';
@import '@vueform/multiselect/themes/default.scss';

.multiselect {
  --ms-font-size: #{$input-font-size};
  --ms-bg: #{$input-bg};
  --ms-border-color-active: #{$input-focus-border-color};
  --ms-border-color: #{$input-border-color};
  --ms-px: #{$input-padding-x};
  --ms-py: #{$input-padding-y};
  --ms-radius: #{$input-border-radius};
  --ms-ring-color: #{$input-btn-focus-color};
  --ms-ring-width: #{$input-btn-focus-width};
  --ms-placeholder-color: #{$input-placeholder-color};

  --ms-dropdown-bg: #{$input-bg};
  --ms-dropdown-border-color: #{$input-focus-border-color};
  --ms-dropdown-radius: #{$input-border-radius};
  --ms-max-height: #{rem-calc(173px)};

  --ms-option-line-height: #{$input-line-height};
  --ms-option-px: #{$input-padding-x};
  --ms-option-py: #{$input-padding-y};
  --ms-option-bg-selected: #{$yellow};
  --ms-option-bg-selected-pointed: #{$yellow};
  --ms-option-bg-pointed: #{$input-border-color};
  --ms-option-color-pointed: #{$white};

  font-family: $input-font-family;
  font-weight: $input-font-weight;
  line-height: $input-line-height;
}

.multiselect-search {
  color: $input-color;
}

.multiselect-dropdown {
  box-shadow: 0 rem-calc(9px) $input-btn-focus-blur $input-btn-focus-width
    $input-btn-focus-color;
}

.multiselect-option {
  border-top: $input-border-width solid $input-border-color;

  &:first-child {
    border-top: 0;
  }
}

.multiselect-is-invalid {
  --ms-border-color: #{$form-feedback-invalid-color};
}
</style>
