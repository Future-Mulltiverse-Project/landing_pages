<template>
  <form @submit.prevent="onSubmit">
    <fieldset class="form-fieldset">
      <legend class="form-legend">
        Please fill Your personal informations
        <span class="form-asterisk">*</span>
      </legend>
      <div class="row form-row">
        <div class="col-12 col-md-6">
          <TextField
            placeholder="First Name"
            name="firstName"
            :rules="{ required: true }"
            label="First Name"
            label-hidden
          />
        </div>
        <div class="col-12 col-md-6">
          <TextField
            label="Last Name"
            placeholder="Last Name"
            name="lastName"
            :rules="{ required: true }"
            label-hidden
          />
        </div>
      </div>
      <div class="row form-row">
        <div class="col-12 col-md-6">
          <TextField
            label="Your email adress"
            field="Email"
            placeholder="Your email adress"
            name="email"
            type="email"
            :rules="{ required: true, email: true }"
            label-hidden
          />
        </div>
        <div class="col-12 col-md-6">
          <TextField
            name="phoneNumber"
            label="Phone number"
            placeholder="Phone number"
            :rules="{ required: true }"
            type="tel"
            label-hidden
          >
            <template #prepend>
              <TelDropdown />
            </template>
          </TextField>
        </div>
      </div>
    </fieldset>
    <div class="row form-row">
      <div class="col-12 col-md-6">
        <SelectField
          name="projectOwnerType"
          label="Are you a project / company or asset owner?"
          field="Owner type"
          :options="['Project/Company', 'Asset Owner']"
          :rules="{ required: true }"
        />
      </div>
      <div class="col-12 col-md-6">
        <SelectField
          name="projectIndustry"
          label="What industry is your project / company in?"
          field="Industry"
          :options="industries"
          :rules="{ required: true }"
          searchable
        />
      </div>
    </div>
    <RadioField
      name="isOwner"
      label="Are you a FXTE Owner?"
      field="Owner"
      :rules="{ required: true }"
      :options="['No', 'Yes']"
    />
    <fieldset class="form-fieldset">
      <div class="row form-row">
        <div class="col-12 col-md-6">
          <SelectField
            name="projectCategory"
            label="(If you are an asset owner) Please select your asset's category:"
            field="Category"
            :options="['Project/Company', 'Asset Owner']"
            :rules="{ required: true }"
          />
        </div>
        <div class="col-12 col-md-6">
          <SelectField
            name="projectValue"
            label="Please tell us your assets value:"
            field="Assets value"
            :options="[
              '$10-$100',
              '$100-$1000',
              '$1000-$10000',
              '$10000-$100000',
              '$100000-$1000000',
            ]"
            :rules="{ required: true }"
          />
        </div>
      </div>
    </fieldset>
    <TextareaField
      rows="5"
      name="about"
      label="Please describe your business and where you specifically need the most help right now:"
      field="Description"
      placeholder="Describe"
      :rules="{ required: true }"
    />
    <div class="row form-footer">
      <div class="col-auto">
        <CheckboxField
          name="terms"
          label="Terms & Services"
          :options="['I agree with FutureX terms & services']"
          :rules="{ required: true }"
          label-hidden
        />
      </div>
      <div class="col-auto">
        <button
          class="btn btn-sm btn-outline-primary"
          :class="isLoading && 'btn-is-loading'"
          type="submit"
          :disabled="isLoading"
        >
          Apply now
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CheckboxField from '~/components/Form/CheckboxField.vue';
import RadioField from '~/components/Form/RadioField.vue';
import SelectField from '~/components/Form/SelectField.vue';
import { setFormBackendErrors } from '~/components/Form/setFormBackendErrors';
import TelDropdown from '~/components/Form/TelDropdown.vue';
import TextareaField from '~/components/Form/TextareaField.vue';
import TextField from '~/components/Form/TextField.vue';

const { handleSubmit, setFieldError } = useForm({
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    about: '',
    isOwner: '',
    projectOwnerType: '',
    projectIndustry: '',
    projectCategory: '',
    projectValue: '',
    terms: false,
  },
});

const router = useRouter();
const isLoading = ref(false);

const onSubmit = handleSubmit(async () => {
  isLoading.value = true;
  try {
    // console.log(formData);
    await Promise.resolve();
    router.back();
  } catch (error) {
    setFormBackendErrors(error, setFieldError);
    isLoading.value = false;
  }
});

const industries = ref([
  'Affiliate Marketing',
  'Ai (Artificial Intelligence)',
  'Automobiles',
  'Automobile components',
  'Aviation',
  'Biotechnology',
  'Blockchain Technology',
  'Chemicals',
  'Construction',
  'Electronic systems',
  'Electrical machinery',
  'Finances & Insurance',
  'Food processing',
  'Exports',
  'Information technology and business process management',
  'Media and entertainment',
  'Metaverse',
  'Mining',
  'NFTs',
  'Oil and gas',
  'Online Marketing',
  'Pharmaceuticals',
  'Ports & shipping',
  'Railways',
  'Rapid Transit',
  'Renewable energy',
  'Roads and highways',
  'Science',
  'Software',
  'Space and astronomy',
  'Thermal power',
  'Textiles and garments',
  'Tourism',
  'Web 3, 4 +',
  'Wellness and Healthcare',
]);
</script>
