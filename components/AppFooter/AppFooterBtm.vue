<template>
  <div :class="$style.btm">
    <div :class="$style.wrapper">
      <NuxtLink to="/" :class="$style.link" class="mt-0 sm:mt-5" >
        <CommentsIcon />
        <span>
          <strong>Need a Quote?</strong>
          Let’s talk business!
        </span>
      </NuxtLink>
      <NuxtLink to="/" :class="$style.btn" @click="scrollToTop">
        <ArrowIcon />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArrowIcon from '~/icons/ArrowIcon.vue';
import CommentsIcon from '~/icons/CommentsIcon.vue';
import { ref } from 'vue';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Add smooth scrolling
  });
};
</script>

<style lang="scss" module>
.btm {
  background-color: #1c203d;
  color: #fff;
}

.wrapper {
  max-width: rem-calc(1440px);
  margin: 0 auto;
  position: relative;
  padding: rem-calc(14px 0);

  @media (max-width: 1440px) {
    @include margin(0 $wrapper-padding);
  }

  @include media-breakpoint-down(sm) {
    margin: rem-calc(0 $wrapper-padding-sm);
  }
}

.link {
  font-size: 14px;
  //margin-top: rem-calc(20px);
  display: inline-flex;
  align-items: center;
  color: inherit;
  line-height: divide(18, 14);

  @include media-breakpoint-up(sm) {
    margin-top: 0;
    margin-right: rem-calc(60px);
  }

  strong {
    color: $primary;
  }

  svg {
    margin-right: rem-calc(16px);
    width: rem-calc(35px);
    height: rem-calc(35px);
    color: white;
  }
}

.btn {
  align-items: center;
  border-radius: 50%;
  background-color: $blue-800;
  border: 3px solid $primary;
  color: #fff;
  top: rem-calc(-18px);
  display: flex;
  position: absolute;
  height: rem-calc(40px);
  justify-content: center;
  right: 0;
  width: rem-calc(40px);
  transition: transform 0.2s ease-in-out;

  &:hover {
    color: #fff;
    transform: rotate(90deg) scale(1.1);
  }

  svg {
    height: rem-calc(16px);
    width: rem-calc(16px);
  }
}
</style>
