<template>
  <header :class="$style.header">
    <div :class="$style.logoContainer">
      <NuxtLink to="/guidebook" aria-label="FXPO" :class="$style.logo">
        <!-- <LogoIcon :class="$style.logoSvg" /> -->
        <img src="~/assets/images/graceai/guidebook_logo.png" :class="$style.logoSvg" alt="Logo">


Guide<span style="color: #cfb16d">book</span>
        <LogoIcon :class="$style.logoSvg" />
        Guide
        <span style="color: #cfb16d">book</span>

      </NuxtLink>
    </div>
    <div :class="$style.content">
      <div class="row" :class="$style.row">
        <div class="col-auto" style="padding-right: 0px !important">
          <NuxtLink to="/" :class="$style.link">
            <HeadCommentIcon />



            <span style="color: #fff">Grace</span>

            <span style="color: #fff">Grace</span>

            <span style="color: #cfb16d">AI</span>
          </NuxtLink>
        </div>
        <div class="col-auto">
          <div class="row" :class="$style.btnRow">
            <div class="col-auto">
              <NuxtLink to="https://sandbox.futuremultiverse.dev/" class="btn btn-sm btn-outline-gradient-primary">
                Onboard
              </NuxtLink>
            </div>
            <div class="col-auto">
              <NuxtLink to="https://sandbox.futuremultiverse.dev/" class="btn btn-sm btn-outline-primary">
                Connect
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
import HeadCommentIcon from '~/icons/HeadCommentIcon.vue';
import LogoIcon from '~/icons/LogoIcon.vue';
import GuidebookToggleBtn from '~/components/Guidebook/GuidebookToggleBtn.vue';
</script>

<style lang="scss" module>
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
  //margin-right: rem-calc(-10px);
  width: 100px;
  padding:0px;
}

.content {
  padding: 25px 24px  ;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.row {
  align-items: center;
  justify-content: space-between;
}

.link {
  
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


  :global(.btn) {
    padding: rem-calc(10px 28px);
  }
}

.toggleCol {
  display: block;

  @include media-breakpoint-up(lg) {
    display: none;
  }
  padding: 0px !important;
  margin-right: 10px;
}
</style>
