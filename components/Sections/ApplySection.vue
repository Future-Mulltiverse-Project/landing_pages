<template>
  <section :class="$style.section">
    <div :class="$style.grid">
      <div :class="$style.item">
        <div :class="$style.textContainer">
          <h3 :class="$style.title">{{ item.title }}</h3>
          <div :class="$style.text">{{ item.text }}</div>
          <NuxtLink
            :class="$style.btn"
            class="btn btn-sm btn-outline-primary"
            :to="item.to"
          >
            Explore
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { NuxtLinkProps } from '#app';

type ItemData = { title: string; text: string; to: NuxtLinkProps };
defineProps<{ item: ItemData }>();
</script>

<style lang="scss" module>
.section {
  overflow: hidden;
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 -1px -1px;

}

.item {
  border-left: 1px solid transparent;
  border-right: 1px solid #222649;
  border-bottom: 1px solid #222649;
  display: flex;
  align-items: center;
  background: radial-gradient(100% 60% at center bottom, #23274a, transparent);
  overflow: hidden;
  flex-direction: column;
  text-align: center;
  padding-top: 70px;
  padding-bottom: 70px;


  &:nth-child(odd) {
    padding-left: rem-calc($wrapper-padding-sm);
    padding-right: rem-calc($wrapper-padding-sm);


    @media (min-width: $wrapper-width + 1px) {
      padding-left: calc(100% - $wrapper-inner-width / 2);
    }
  }

  &:nth-child(even) {
    padding-left: rem-calc($wrapper-padding-sm);
    padding-right: rem-calc($wrapper-padding-sm);


    @media (min-width: $wrapper-width + 1px) {
      padding-left: calc(100% - $wrapper-inner-width / 2);
      padding-right: 0;
    }

    @media (min-width: 1441px) {
      padding-left: rem-calc(135px);
      padding-right: calc(100% - $wrapper-inner-width / 2);
    }
  }
}

.textContainer {
  padding-bottom: 70px;

}

.title {
  font-size: 44px;
  margin-bottom: 24px;
  color: $primary;
  line-height: divide(55, 44);
}

.text {
  font-size: 16px;
  margin-bottom: 32px;
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;
  line-height: divide(24, 16);
}

.holder {
  position: relative;
  @include media-breakpoint-up(lg) {
    padding-bottom: 254.34%;
  }
}

.img {
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  @include media-breakpoint-up(lg) {
    width: rem-calc(230px);
  }
}

.btn {
  min-width: rem-calc(130px);
  max-width: 100%;
}

.media {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: calc(var(--image-w) / 16 * 1rem);
  width: 80%;

  @include media-breakpoint-up(lg) {
    position: absolute;
    top: 50%;
    left: 0;
    margin-left: wrap-calc(-32px, 230px);
    transform: translateY(-50%);
    max-width: none;
    width: calc(var(--image-w) * 100% / 230);
  }
}
</style>
