<template>
  <article :class="$style.article">
    <div :class="$style.absolute">
      <div :class="$style.icon">
        <slot name="icon" />
      </div>
      <h3 :class="$style.title" v-html="item.title" />
      <div :class="$style.summ">
        {{ item.summ }}
      </div>
    </div>
    <div :class="$style.content">
      <div :class="$style.contentInner">
        <MediaPicture
          src="/images/bckg-quote.jpg"
          :width="684"
          :height="766"
          layout="fill"
        />
        <div :class="$style.contentWrapper">
          <h4 v-if="item.subtitle" :class="$style.subtitle">
            {{ item.subtitle }}
          </h4>
          <div v-if="item.text" :class="$style.text">
            {{ item.text }}
          </div>
          <NuxtLink
            :to="item.too"
            class="btn btn-sm btn-outline-primary"
            :class="$style.btn"
          >
            Read More
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';

interface Item {
  icon: string;
  title: string;
  summ: string;
  subtitle?: string;
  text?: string;
  too?: string;
}

defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
});
</script>

<style lang="scss" module>
.article {
  display: flex;
  text-align: center;
  position: relative;
  padding: rem-calc(z);
  min-height: rem-calc(360px);

  @include media-breakpoint-up(sm) {
    min-height: rem-calc(430px);
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 26px;
    bottom: 26px;
    width: 1px;
  }

  &:before {
    left: 0;
    background-color: transparent;
  }

  &:after {
    background-color: $blue-100;
    right: 0;
  }
}

.absolute {
  border-bottom: 1px solid $blue-100;
  padding: rem-calc(26px);
  min-height: 100%;
  width: 100%;
}

.content {
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, $yellow-200, $yellow-400);
  border-style: solid;
  border-width: 6px;
  background-color: $blue-800;
  position: absolute;
  overflow-y: scroll;
  top: 0;
  padding: 6px;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  z-index: 1;
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;

  .article:hover & {
    opacity: 1;
    visibility: visible;
  }
}

.contentInner {
  width: 100%;
  height: 100%;
  background-color: #000;
  position: relative;
}

.contentWrapper {
  position: relative;
  padding: rem-calc(40px) wrap-calc(60px, 374px);
}

.icon {
  margin: 0 0 rem-calc(22px);

  svg {
    min-width: rem-calc(40px);
    min-height: rem-calc(40px);
  }
}

.title {
  font-size: 26px;
  line-height: math-div(30, 26);
  margin-bottom: rem-calc(20px);
  font-weight: 600;
  color: $primary;

  &::after {
    border-top: 3px solid $primary;
    margin: rem-calc(26px) auto 0;
    content: '';
    display: block;
    width: rem-calc(60px);
  }
}

.summ {
  color: #9c9c9c;
  max-width: rem-calc(224px);
  margin: 0 auto;
}

.subtitle {
  font-size: 26px;
  color: $primary;
  line-height: math-div(30, 26);
  font-weight: 600;
  margin-bottom: rem-calc(16px);
}

.text {
  margin: 0 auto rem-calc(18px);
  max-width: 18ch;
}

.btn {
  min-width: rem-calc(128px);
}
</style>
