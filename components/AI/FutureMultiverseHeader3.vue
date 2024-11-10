<template>
  <header :class="$style.el">
    <div :class="$style.wrapper">
      <div class="row" :class="$style.row">
        <div class="col-auto">
          <div :class="$style.logo">
            <div :class="$style.logoIcon">
              <MediaPicture
                :src="Logo"
                :width="300"
                :height="200"
                :class="$style.logo_style"
              />
            </div>
            <div :class="$style.divider"></div>
            <span :class="$style.logoName">
              <strong>Enter</strong>
              Future Multiverse
            </span>
          </div>
        </div>
        <div class="col">
          <div class="row" :class="$style.rightRow">
            <div class="col" :class="$style.navCol"></div>
            <div class="col-auto" :class="$style.btnsCol">
              <div class="row" :class="$style.btnRow">
                <div class="col-auto" :class="$style.btnCol">
                  <div :class="$style.dropdown">
                    <NuxtLink
                      to="/"
                      class="btn btn-sm btn-outline-primary"
                      :class="$style.btn"
                    >
                      <span>HELLO, &nbsp;</span>
                      SIMON
                      <MediaPicture
                        :src="Vector2"
                        :width="350"
                        :height="50"
                        :class="$style.logo_style"
                      />
                    </NuxtLink>
                    <div :class="$style.dropdownContent">
                      <a href="#">My Account</a>
                      <a href="#">Settings</a>
                      <a href="#">Log-Out</a>
                    </div>
                  </div>
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
import AppHeaderToggleBtn from '~/components/AppHeader/AppHeaderToggleBtn.vue';
import Logo from '~/assets/images/future-multiverse/logo.png';
import Vector2 from '~/assets/images/future-multiverse/profile1.png';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.dropdown {
  position: relative;
}

.dropdownContent {
  display: none;
  position: absolute;
  background-color: #cfb16d;
  min-width: 160px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%; /* Position the dropdown below the parent */
  left: 82%; /* Align the dropdown with the center of the parent */
  transform: translateX(-50%); /* Adjust to center the dropdown */
}

/* Add arrow */
.dropdownContent::before {
  content: '';
  position: absolute;
  top: -20px; /* Position the arrow above the dropdown */
  left: 50%; /* Align the arrow with the center of the dropdown */
  transform: translateX(-50%);
  border: 10px solid transparent;
  border-bottom-color: #cfb16d; /* Color of the arrow */
}

.dropdownContent a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdownContent a:hover {
  background-color: #9c9c9c;
}

.dropdown:hover .dropdownContent {
  display: block;
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

  @include media-breakpoint-up(sm) {
    width: rem-calc(68px);
  }

  &::after {
    border-right: 2px solid #3e3e3e;
    content: '';
    height: 35.5%;
    position: absolute;
    right: 0;
    //left: auto;
    left: 25px !important;
    top: 35%;
    transform: translateY(-50%);
    transform: translateX(50%);
  }
}

.logo_style {
  padding-right: 20px;
  width: 50px !important;
  height: 50px !important;
  border-radius: 20px;
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
.btn {
  color: #fff !important;
  border: none !important;
  font-size: 20px;
  span {
    color: $primary;
  }
  background-color: transparent !important;
  border-color: transparent !important;
}
.btnsCol {
  margin-left: auto;
}

.btnRow {
  align-items: center;
}

.btnCol {
  display: none;

  @include media-breakpoint-up(sm) {
    display: block;
  }
}

.toggleBtnCol {
  @media (min-width: 1341px) {
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
