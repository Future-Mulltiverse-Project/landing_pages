<template>
  <header :class="$style.el">
    <div :class="$style.wrapper">
      <div class="row" :class="$style.row">
        <div class="col-auto">
          <div :class="$style.logo">
            <div :class="$style.logoIcon">
              <img
                :src="Logo"
                :width="130"
                :class="$style.logo_graceai"
              />
            </div>
            
            <!-- <span :class="$style.logoName">
              Grace<strong>AI</strong>
            </span> -->
          </div>
        </div>
        <div class="col">
          <div class="row" :class="$style.rightRow">
            <div class="col" :class="$style.navCol">
              <GraceAiAppHeaderNav /> 
            </div>
            <div class="col-auto" :class="$style.btnsCol">
              <div class="row" :class="$style.btnRow">
                 <div class="col-auto" :class="$style.btnCol">
                  <NuxtLink
                    to="https://sandbox.futuremultiverse.dev"
                    class="btn btn-sm btn-outline-gradient-primary"
                    :class="$style.btn"
                  >
                    Onboard
                  </NuxtLink>
                </div>
                <div class="col-auto" :class="$style.btnCol">
                  <NuxtLink
                    to="https://sandbox.futuremultiverse.dev/"
                    class="btn btn-sm btn-outline-primary"
                    :class="$style.btn"
                  >
                    Connect
                  </NuxtLink>
                </div>  
                
                <div class="col-auto" :class="$style.toggleBtnCol">
                  <AppHeaderToggleBtn />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import GraceAiAppHeaderNav from '../AppHeader/graceAiAppHeaderNav.vue';
import AppHeaderToggleBtn from '~/components/AppHeader/AppHeaderToggleBtn.vue';
import Logo from '~/assets/images/graceai/graceai_logo.png';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.btn
{
  width: 105px;
  padding: 10px;
}
.toggleBtnCol {
  display: block;

 
  @media (min-width: 1350px) {
    display: none;
  }
  
}
.logo_graceai{
  margin-left: 20px;
}

.el {
  @include padding-right(30px);
  background-color: #1a1c37;
  color: #fff;
  position: relative;
  width: 100%;
  z-index: z('header');
}

.logo {
  align-items: center;
  display: inline-flex;
}

.logoIcon {
  position: relative;
  //width: rem-calc(66px);
  max-width: 80px;
  margin-right: 20px;

  @media (max-width: 1200px) {
    width: rem-calc(58px);
  }

  @include media-breakpoint-up(sm) {
    width: rem-calc(68px);
  }

}

.logo_style {
  padding-right: 20px;

  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 21px;
}
.logoName {
  @include font-size(24px);
  margin-left: rem-calc(18px);

  strong {
    color: $primary;
  }
}

.wrapper {
  max-width: rem-calc(1440px);
  margin: 0 auto;
}

.row {
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.rightRow {
  align-items: center;
}

.navCol {
  display: none;

  @media (min-width: 1341px) {
    display: block;
  }
}

.btnsCol {
  margin-left: auto;
}

.btnRow {
  align-items: center;
}

.btnCol {
  display: block;

  @media (max-width: 1341px) {
    display: none;
  }
}

.toggleCol {
  display: block;

  @include media-breakpoint-up(lg) {
    display: none;
  }
}


.walletBtn {
  @include font-size(14px);
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  transition: color 150ms ease-in-out;

  &:not(:hover) {
    color: $primary;
  }

  svg {
    fill: $primary;
    margin-left: rem-calc(10px);
    height: rem-calc(22px);
    width: rem-calc(22px);
  }
}
</style>
