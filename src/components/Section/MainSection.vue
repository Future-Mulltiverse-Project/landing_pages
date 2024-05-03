<template>
  <component
    :is="tag"
    :class="[
      $style.section,
      angleLeftTop && $style.sectionAngleLeftTop,
      angleRightTop && $style.sectionAngleRightTop,
      angleBottom && $style.sectionAngleBottom,
      angleLeftYBoth && $style.sectionAngleLeftYBoth,
      angleRightYBoth && $style.sectionAngleRightYBoth,
      hasBgBehind && $style.sectionHasBgBehind,
      $slots.bg && $style.sectionHasBgImage,
    ]"
  >
    <div :class="$style.backgroundMask">
      <div v-if="hasBgBehind" :class="$style.foreground"></div>
      <div :class="$style.background"></div>
      <div v-if="$slots.bg" :class="$style.bgImage">
        <slot name="bg" />
      </div>
      <div v-if="hasGradient" :class="$style.gradient"></div>
    </div>
    <div :class="$style.container">
      <div :class="$style.layout">
        <slot />
      </div>
    </div>
    <slot name="afterContent" />
  </component>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    tag?: string;
    angleLeftTop?: boolean;
    angleRightTop?: boolean;
    angleBottom?: boolean;
    angleLeftYBoth?: boolean;
    angleRightYBoth?: boolean;
    hasBgBehind?: boolean;
    hasGradient?: boolean;
  }>(),
  {
    tag: 'section',
  },
);
</script>

<style lang="scss" module>
.section {
  --windowWidth: 100vw;
  --angleNormal: -3.4deg;
  --angleNormalSin: 0.059;
  --angleHeight: calc(var(--windowWidth) * (var(--angleNormalSin)));
  --sectionBackgroundColor: #0c0f22;
  --sectionGradientBackgroundColor: transparent;
  --sectionGradient: linear-gradient(
    180deg,
    rgba(33, 38, 70, 0.3) 0%,
    transparent 88.54%
  );
  --sectionBackgroundImageOverflow: hidden;
  --sectionBackgroundImageHeight: 100%;
  --sectionAngle: 0;
  --sectionAngleReversed: calc(var(--sectionAngle) * -1);
  --sectionAngleSin: var(--angleNormalSin);
  --sectionAngleHeight: calc(var(--windowWidth) * (var(--sectionAngleSin)));
  --sectionAnglePaddingTop: var(--sectionAngleHeight);
  --sectionAnglePaddingBottom: var(--sectionAngleHeight);
  --sectionTransformOrigin: 100% 0;
  --sectionTransformOriginReversed: 0 0;
  --sectionPaddingTop: 0;
  --sectionPaddingBottom: 0;
  --sectionMarginBottom: 0;
  --sectionBackgroundMarginTop: 0;
  --sectionForegroundBgColor: #15172e;
  --sectionForegroundBgOpacity: 1;
  margin-bottom: var(--sectionMarginBottom);
  position: relative;
}

.sectionAngleRightTop,
.sectionAngleRightYBoth {
  --sectionAngle: var(--angleNormal);
}

.sectionAngleRightTop:not(.sectionHasBgBehind),
.sectionAngleRightYBoth:not(.sectionHasBgBehind),
.sectionAngleLeftYBoth:not(.sectionHasBgBehind),
.sectionAngleLeftTop:not(.sectionHasBgBehind) {
  --sectionPaddingTop: var(--sectionAnglePaddingTop);
}

.sectionAngleLeftYBoth,
.sectionAngleLeftTop {
  --sectionAngle: calc(var(--angleNormal) * -1);
  --sectionTransformOrigin: 0 0;
  --sectionTransformOriginReversed: 100% 0;
}

.sectionAngleRightTop.sectionHasBgBehind,
.sectionAngleRightYBoth.sectionHasBgBehind,
.sectionAngleLeftTop.sectionHasBgBehind,
.sectionAngleLeftYBoth.sectionHasBgBehind {
  --sectionPaddingTop: calc(var(--sectionAnglePaddingTop) * 2);
  --sectionBackgroundMarginTop: calc(
    var(--windowWidth) * var(--angleNormalSin)
  );

  .section.sectionHasBgImage + & {
    --sectionForegroundBgOpacity: 0.8;
  }
}

.sectionAngleLeftYBoth:not(.sectionHasBgBehind),
.sectionAngleRightYBoth:not(.sectionHasBgBehind),
.sectionAngleBottom:not(.sectionHasBgBehind) {
  --sectionPaddingBottom: var(--sectionAngleHeight);
  --sectionMarginBottom: calc(var(--sectionAngleHeight) * -1);
}

.sectionAngleBottom.sectionHasBgBehind,
.sectionAngleLeftYBoth.sectionHasBgBehind,
.sectionAngleRightYBoth.sectionHasBgBehind {
  --sectionPaddingBottom: calc(var(--sectionAngleHeight) * 2);
  --sectionMarginBottom: calc(var(--sectionAngleHeight) * -2);
}

.sectionAngleBottom {
  --sectionTransformOrigin: 0 0;
}

.backgroundMask {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.foreground {
  background-color: var(--sectionForegroundBgColor);
  height: 100%;
  position: absolute;
  transform-origin: var(--sectionTransformOriginReversed);
  transform: skewY(var(--sectionAngleReversed));
  opacity: var(--sectionForegroundBgOpacity);
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}

.background {
  background-color: var(--sectionBackgroundColor);
  height: 100%;
  position: relative;
  transform-origin: var(--sectionTransformOrigin);
  transform: skewY(var(--sectionAngle));
  width: 100%;
  top: 0;
  margin-top: var(--sectionBackgroundMarginTop);
  left: 0;
}

.bgImage {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: var(--sectionBackgroundImageOverflow);
  margin-top: var(--sectionBackgroundMarginTop);
  transform-origin: var(--sectionTransformOrigin);
  transform: skewY(var(--sectionAngle));

  > * {
    transform-origin: var(--sectionTransformOriginReversed);
    transform: skewY(var(--sectionAngleReversed));
  }
}

.gradient {
  transform-origin: var(--sectionTransformOrigin);
  transform: skewY(var(--sectionAngle));
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 100%;
  margin-top: var(--sectionBackgroundMarginTop);

  &::after {
    background-color: var(--sectionGradientBackgroundColor);
    content: '';
    background-image: var(--sectionGradient);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    max-height: 808px;
    width: 100%;
    transform-origin: var(--sectionTransformOriginReversed);
    transform: skewY(var(--sectionAngleReversed));
    margin-top: calc(var(--sectionAngleHeight) * -1);
  }
}

.container {
  position: relative;
  z-index: 1;
  width: 100%;
}

.layout {
  padding: var(--sectionPaddingTop) 0 var(--sectionPaddingBottom);
}
</style>
