<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-6">
          <MainSectionHeader :title="title" :class="$style.header">
            <div v-html="heading"></div>
          </MainSectionHeader>
          <slot name="buttons"></slot>
        </div>
        <div class="col-12 col-lg-6" :class="$style.rightCol">
          <MainSectionTextContent>
            <slot name="text"></slot>
          </MainSectionTextContent>
        </div>
      </div>
    </AppWrapper>
    <div v-if="$slots.default" :class="$style.listContainer">
      <AppWrapper>
        <slot />
      </AppWrapper>
    </div>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';

defineProps<{
  title: string;
  heading?: string;
}>();
</script>

<style lang="scss" module>
.section {
  padding: 132px  0 0;
}

.row {
  padding-bottom: 116px;
}

.listContainer {
  padding-bottom: 132px;
  background: radial-gradient(
    1160px 320px at center bottom,
    #0a0d21,
    transparent
  );
}

.header {
  margin-bottom: 44px;

  p {
    @include media-breakpoint-up(lg) {
      max-width: rem-calc(470px);
    }
  }

  p:first-child {
    margin-top: 30px;
  }
}

.rightCol {
  @include media-breakpoint-up(lg) {
    //padding-left: 100px;
  }
}
</style>
