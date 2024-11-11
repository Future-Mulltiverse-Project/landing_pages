<template>
  <button type="button" :class="$style.chatBtn">
    <span :class="$style.chatIcon">
      <HeadCommentIcon />
    </span>
    Chat Guide
  </button>
</template>

<script lang="ts" setup>
import HeadCommentIcon from '~/icons/HeadCommentIcon.vue';
</script>

<style lang="scss" module>
.chatBtn {
  //font-size: 12px;
  font-size: 12px;
  background-color: transparent;
  border: 0;
  padding: 0;
  color: $primary;
  display: inline-block;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  position: fixed;
  bottom: rem-calc(100px);
  right: 0;
  margin-right: rem-calc($wrapper-padding-sm);
  z-index: 2;

  /*@include media-breakpoint-up(sm) {
    margin-right: $wrapper-padding;
  }*/

  @media (min-width: 1441px) {
    right: 50%;
    transform: translateX(720px);
    margin-right: 0;
  }
}

.chatIcon {
  align-items: center;
  background-color: $primary;
  border-radius: 50rem;
  color: #0f1126;
  display: flex;
  height: rem-calc(50px);
  justify-content: center;
  width: rem-calc(50px);
  margin: 0 auto rem-calc(10px);
  transition: transform 150ms ease-in-out;

  .chatBtn:hover & {
    transform: scale(1.1);
  }

  svg {
    height: rem-calc(20px);
    width: rem-calc(20px);
  }
}
</style>
