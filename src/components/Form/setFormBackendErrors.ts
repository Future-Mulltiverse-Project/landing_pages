import { email, max, required } from '@vee-validate/rules';
import { configure, defineRule, FormActions } from 'vee-validate';

defineRule('required', required);
defineRule('email', email);
defineRule('max', max);

configure({
  generateMessage: (context) => {
    switch (context.rule?.name) {
      case 'required':
        return `The ${context.field} field is required`;
      case 'email':
        return `The ${context.field} field must be a valid email`;
      case 'max':
        return `The ${context.field} field may not be greater than ${context.rule?.params} characters`;
      default:
        return `The ${context.field} field is not valid`;
    }
  },
});

export const setFormBackendErrors = <
  TValues extends Record<string, any> = Record<string, any>,
>(
  error: any,
  setFieldError: FormActions<TValues>['setFieldError'],
) => {
  if (typeof error?.data?.errors === 'object') {
    const fields = Object.keys(error.data.errors);
    const fieldsCount = fields.length;
    for (let i = 0; i < fieldsCount; i++) {
      const field = fields[i];
      setFieldError(field, error.data.errors[field]);
    }
  }
};
