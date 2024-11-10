<template>
  <DefaultLayout title="Apply">
    <div :class="$style.inner">
      <AppWrapper>
        <ApplyForm />
      </AppWrapper>
    </div>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import ApplyForm from '~/components/Apply/ApplyForm.vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
</script>

<style lang="scss" module>
@import 'assets/styles/vars.scss';

.inner {
  padding-bottom: rem-calc(128px);
  padding-top: rem-calc(148px);
}
</style>
