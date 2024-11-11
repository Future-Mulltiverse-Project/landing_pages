<template>
  <MainSection :class="$style.section" angle-bottom>
    <template #bg>
      <MediaPicture
        ref="mediaRef"
        :class="$style.media"
        layout="fill"
        src="/images/main-picc-hi.jpg"
        :width="1600"
        :height="2176"
        :media-class="[$style.mediaImg, animateImage && $style.mediaImgAnimate]"
      />
    </template>
    <AppWrapper :class="$style.wrapper">
      <Transition
        :enter-active-class="$style.enterActive"
        :leave-active-class="$style.leaveActive"
        :enter-from-class="$style.enterFrom"
        :leave-to-class="$style.leaveTo"
        mode="out-in"
        @after-leave="afterLeave"
      >
        <div v-if="!animate" :class="$style.content">
          <h1 :class="$style.title">
            <LogoIcon :class="$style.logo" />
            <span>ACCELERATING THE FUTURE</span>
            <br />
            FOR EVERYONE
          </h1>
          <h2 :class="$style.subtitle">Because it’s time for a New World</h2>
          <button
            :class="$style.btn"
            class="btn btn-outline-primary"
            type="button"
            @click="() => (entered = true)"
          >
            Enter the Future
          </button>
        </div>
        <div v-else :class="$style.content">
          <h1 :class="$style.title">
            <LogoIcon :class="$style.logo" />
            <span>Welcome to the</span>
            <br />
            FutureX EXPO
          </h1>
          <h2 :class="$style.subtitle">The Catalyst of the Future</h2>
          <button
            :class="$style.btn"
            class="btn btn-outline-primary"
            type="button"
          >
            Connect
          </button>
        </div>
      </Transition>
    </AppWrapper>
    <!--template #afterContent>
      <div :class="$style.scroll">
        <ScrollIcon />
        Scroll & learn more
      </div>
    </template-->
  </MainSection>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from '#imports';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import MainSection from '~/components/Section/MainSection.vue';
import LogoIcon from '~/icons/LogoIcon.vue';
import ScrollIcon from '~/icons/ScrollIcon.vue';

const entered = ref(false);
const scrolled = ref(false);
const animate = computed(() => scrolled.value || entered.value);

const stopScroll = () => {
  window.removeEventListener('scroll', onScroll);
};

const onScroll = () => {
  scrolled.value = true;
  stopScroll();
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, {
    capture: false,
    passive: true,
  });
});

onBeforeUnmount(stopScroll);

const animateImage = ref(false);

function afterLeave() {
  animateImage.value = true;
}
</script>

<style lang="scss" module>
.enterActive,
.leaveActive {
  transition:
    opacity 300ms ease-in-out,
    transform 300ms ease-in-out;
}

.enterFrom,
.leaveTo {
  opacity: 0;
  transform: translate3d(0, 40px, 0);
}

.enterFrom {
  transform: translate3d(0, 40px, 0);
}

.leaveTo {
  transform: translate3d(0, -40px, 0);
}

.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
}

.content {
}

.media {
  left: 50%;
  min-width: 800px;
  transform: translateX(-50%);
}

.mediaImg {
  object-position: 0 4%;
  transition-delay: 100ms;
  transition:
    opacity 100ms,
    object-position 800ms ease-out;
  transform: translateZ(0);
  will-change: opacity, object-position;
}

.mediaImgAnimate {
  object-position: 0 60%;
}

.wrapper {
  padding: rem-calc(120px 0);
}

.title {
  font-size: 60px;
  margin: 0 0 rem-calc(24px);
  text-transform: uppercase;
  line-height: math-div(70, 60);

  span {
    color: $primary;
  }
}

.logo {
  height: em-calc(74px, 60px);
  width: em-calc(74px, 60px);
  margin: 0 auto em-calc(16px, 60px);
  display: block;
}

.subtitle {
  font-size: 28px;
  color: $primary;
  font-weight: 600;
  margin-bottom: rem-calc(42px);
}

.btn {
  min-width: fit-content;
  width: rem-calc(235px);

  &:not(:hover) {
    background-color: rgba(#0c0f22, 0.2);
  }
}

.scroll {
  //margin: calc(var(--angleHeight) / -2 - #{rem-calc(23px)}) auto rem-calc(16px);

  font-size: 10px;
  bottom: 0;
  margin-bottom: calc(var(--angleHeight) / 2);
  font-weight: 700;
  left: 50%;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  transform: translateX(-50%);
  z-index: 1;

  svg {
    color: $primary;
    display: block;
    margin: 0 auto rem-calc(16px);
    width: rem-calc(20px);
    height: rem-calc(24px);
  }

  &:after {
    background: $yellow-200;
    content: '';
    display: block;
    height: rem-calc(100px);
    margin: rem-calc(22px) auto rem-calc(-50px);
    width: 3px;
  }
}
</style>
