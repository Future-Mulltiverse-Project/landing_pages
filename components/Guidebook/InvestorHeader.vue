<template>
  <header :class="$style.header">
    <div :class="$style.logoContainer">
      <NuxtLink to="/guidebook" aria-label="FXPO" :class="$style.logo">
        <LogoIcon :class="$style.logoSvg" />
        FXPO
        <span style="color: #cfb16d"></span>
      </NuxtLink>
    </div>
    <div :class="$style.content">
      <div class="row" :class="$style.row">
        <div class="col-auto">
          <span style="color: #0c0f22">User / Investor Dashboard</span>
        </div>
        <div class="col-auto">
          <div class="row" :class="$style.btnRow">
            <div class="col-auto"></div>
            <div class="col-auto">
              <NuxtLink class="btn btn-sm">
                <span style="color: #0c0f22">HELLO,SIMON</span>
                <div :class="$style.logo1" class="col-md-3"></div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-auto" :class="$style.toggleCol">
          <GuidebookToggleBtn />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import LogoIcon2 from '~/icons/LogoIcon3.vue';
import LogoIcon from '~/icons/LogoIcon2.vue';
import GuidebookToggleBtn from '~/components/Guidebook/GuidebookToggleBtn.vue';
</script>

<style lang="scss" module>
.logo1 {
  margin-left: 10px;
  height: 40px;
  border-radius: 20px;
  background-color: grey;
  background-image: url(assets/images/backoffice/simon.png);
}

.header {
  //padding: 25px 24px  ;
  background-color: rgba(#0c0f22, 0.7);
  left: 0;
  display: flex;
  position: absolute;
  top: 0;
  min-height: rem-calc(88px);
  width: 100%;
  z-index: z('header');

  &::after {
    content: '';
    border-top: 1px solid #2a3052;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}

.logoContainer {
  padding: 24px   ;

  display: flex;
  align-items: center;
  line-height: 1;
  width: 30%;
  @include media-breakpoint-up(lg) {
    background-color: #0c0f22;
    flex: 0 0 rem-calc(240px);
  }
}

.logo {
  font-size: 16px;
  align-items: center;
  color: #fff !important;
  display: inline-block;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
}

.logoSvg {
  height: rem-calc(40px);
  margin-right: rem-calc(16px);
  width: rem-calc(40px);
}

.content {
  padding: 25px 24px  ;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  max-height: 85px;
}

.row {
  align-items: center;
  justify-content: space-between;
}

.link {
  display: none;
  font-size: 16px;
  align-items: center;


  svg {
    height: rem-calc(20px);
    margin-right: rem-calc(12px);
    width: rem-calc(20px);
  }
}

.btnRow {
  --gutter-x: #{rem-calc(10px)};
  display: none;

  @include media-breakpoint-up(lg) {
    display: flex;
  }

  :global(.btn) {
    padding: rem-calc(10px 28px);
  }
}

.toggleCol {
  display: block;
  background: #0c0f22 !important;
  @include media-breakpoint-up(lg) {
    display: none;
  }
}

.src-components-Guidebook-GuidebookToggleBtn-vue-vue-type-style-index-0-lang-module__btn-SOSnS {
  background: #0c0f22 !important;
}
</style>
