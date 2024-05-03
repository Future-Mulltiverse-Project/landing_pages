<template>
  <div class="form-group">
    <label
      :for="name + displayOptions.value"
      :class="['form-label', { 'visually-hidden': labelHidden }]"
    >
      {{ label }}
      <span v-if="isRequired" class="form-asterisk">*</span>
    </label>
    <div
      v-for="option in displayOptions"
      :key="option?.value || option"
      class="form-check"
    >
      <input
        :id="name + option.value"
        :value="option.value"
        class="form-check-input"
        :class="hasError && 'is-invalid'"
        :name="name"
        :checked="
          multiple
            ? Array.isArray(value) && value?.includes(option.value)
            : value === option.value
        "
        type="checkbox"
        @blur="handleBlur"
        @input="handleChange"
      />
      <label class="form-check-label" :for="name + option.value">
        {{ option.label }}
      </label>
    </div>
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
  field: {
    type: String,
    default: '',
  },
  rules: {
    type: [String, Object],
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
  multiple: {
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

const {
  value,
  errorMessage,
  handleBlur,
  meta,
  setValue,
  setTouched,
  validate,
} = useField(name, rules, {
  label: fieldLabel,
});

const hasError = computed(() => errorMessage.value && meta.touched);

const displayOptions = computed(() =>
  props.options.map((option) =>
    typeof option === 'object'
      ? option
      : {
          value: option,
          label: option,
        },
  ),
);

function handleChange(e: any) {
  setTouched(true);
  const newVal = e.target.value;

  if (props.multiple) {
    const currentValue = Array.isArray(value.value) ? [...value.value] : [];
    if (currentValue.includes(newVal)) {
      currentValue.splice(currentValue.indexOf(newVal), 1);
    } else {
      currentValue.push(newVal);
    }
    setValue(currentValue);
  } else if (e.target.value === value.value) {
    setValue('');
  } else {
    setValue(e.target.value);
  }
  validate();
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
