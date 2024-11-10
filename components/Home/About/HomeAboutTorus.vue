<template>
  <div :class="$style.el">
    <div :class="$style.container">
      <div :class="$style.wrapper">
        <MediaPicture
          src="/images/torus.jpg"
          layout="responsive"
          :width="1439"
          :height="956"
        />
      </div>
      <div :class="[$style.btn, $style.btnPrev]">
        <div :class="$style.btnArrow">
          <ArrowIcon />
        </div>
        Prev
      </div>
      <div :class="[$style.btn, $style.btnNext]">
        <div :class="$style.btnArrow">
          <ArrowIcon />
        </div>
        Next
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MediaPicture from '~/components/Media/MediaPicture.vue';
import ArrowIcon from '~/icons/ArrowIcon.vue';
</script>

<style lang="scss" module>
.el {
  padding: rem-calc(0 40px);

  @include media-breakpoint-up(sm) {
    padding: rem-calc(0 54px);
  }
}

.container {
  position: relative;
  max-width: rem-calc(750px);
  margin: rem-calc(74px) auto 0;
  width: 100%;

  &:before {
    content: '';
    display: block;
    padding-bottom: 64%;
  }
}

.wrapper {
  position: absolute;
  top: 0;
  margin-top: wrap-calc(277px, 750px);
  left: 49.6%;
  transform: translate(-50%, -50%);
  width: wrap-calc(1440px, 750px);
}

.btn {
  @include font-size(10px);

  color: $primary;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 700;
  position: absolute;
  top: 57.1%;
}

.btnPrev {
  left: 0;
  transform: translate(-100%, -50%);
}

.btnNext {
  right: 0;
  transform: translate(100%, -50%);
}

.btnArrow {
  color: #fff;
  align-items: center;
  border-radius: 50%;
  border: 3px solid $primary;
  display: flex;
  height: rem-calc(40px);
  justify-content: center;
  margin-bottom: rem-calc(6px);
  width: rem-calc(40px);

  svg {
    height: rem-calc(14px);
    width: rem-calc(14px);
  }

  @include media-breakpoint-up(sm) {
    height: rem-calc(54px);
    width: rem-calc(54px);

    svg {
      height: rem-calc(20px);
      width: rem-calc(20px);
    }
  }

  .btnNext & {
    transform: rotate(180deg);
  }
}
</style>
