<template>
  <div :class="$style.el">
    <AiHeader />
    <div :class="$style.body">
      <MediaPicture
        :class="$style.bg"
        :src="Bg"
        :width="1927"
        :height="881"
        layout="fill"
      />
      <AppWrapper>
        <div :class="$style.logo">
          <MediaPicture :src="Logo" :width="284" :height="284" />
        </div>
        <div :class="$style.text1">
          <span>Enter</span>
          <strong>&</strong>
          <span>Experience</span>
          The
          <br />
          <span>FUTURE</span>
          <strong>GUIDE</strong>
        </div>
        <div :class="$style.text2">
          <strong></strong>

          <br />
          <br />
          <br />
          Experience the future today:
          <strong></strong>

          <strong></strong>
        </div>
        <div class="row" :class="$style.btnRow">
          <div class="col-auto">
            <NuxtLink
              to="/"
              class="btn btn-outline-primary"
              :class="$style.btn77"
            >
              <span :class="$style.btn7">
                ENTER FUTURE
                <br />
                MULTIVERSE
              </span>
              <HeadCommentIcon />
            </NuxtLink>
          </div>
          <div class="col-auto">
            <NuxtLink
              to="/"
              class="btn btn-outline-primary"
              :class="$style.btn"
            >
              <span>ONBOARD</span>
            </NuxtLink>
          </div>
        </div>

        <div :class="$style.text3">
          Please Onboard & Connect your Wallet
          <br />
          to Enter the Future Multiverse
        </div>

        <div class="row">
          <div :class="$style.logo2" class="col-md-1">
            <MediaPicture :src="GraceAILogo" :width="2" :height="3" />
          </div>
        </div>
      </AppWrapper>
    </div>
    <ExploreFooter />
  </div>
</template>

<script lang="ts" setup>
import HeadCommentIcon from '~/icons/HeadCommentIcon4.vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import Bg from 'assets/images/future-multiverse/multiversebg.png';
import Logo from '~/assets/images/future-multiverse/logo.png';
import GraceAILogo from 'assets/images/graceai/GraceAILogo.png';
import ExploreFooter from '~/components/Explore/ExploreFooter.vue';
import AiHeader from '~/components/AI/FutureMultiverseHeader.vue';
</script>

<style lang="scss" module>
.btn77 {
  border: 2px solid gray !important;
  color: gray !important;
}
.btn7 {
  color: gray !important;
}
svg {
  height: rem-calc(10px);
  margin-right: rem-calc(2px);
  width: rem-calc(30px);
  color: gray !important;
}
.logo_style {
  padding-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 21px;
}
.el {
  background-color: $dark;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.body {
  @include padding(80px 0 120px);
  align-items: center;
  display: flex;
  flex-grow: 1;
  position: relative;
}

.form {
  max-width: 100%;
  align-content: center;
  margin: 0 auto;
  margin-top: 4%;
  display: flex;
  align-items: center;
  min-width: rem-calc(10%);
}

.input {
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  width: 60%;
  @media (max-width: 641px) {
    width: 55%;
  }
}

.logo2 {
  margin-top: 200px;
  margin-left: 103%;
  margin-bottom: -50px;
  @include rfs(7%, width);
  min-width: rem-calc(7%);
  @media (max-width: 641px) {
    width: 12%;
  }
}
.logo4 {
  @include rfs(20%, width);
  min-width: rem-calc(20%);
}

.logo5 {
  @include rfs(13%, width);
  min-width: rem-calc(13%);
  @media (max-width: 600px) {
    @include rfs(1%, width);
    min-width: rem-calc(1%);
  }
}

.chat_message {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
}
.chat_message::placeholder {
  font-weight: 600;
  color: black;
}

.bg {
  opacity: 0.9;
}

.logo {
  @include rfs(100px, width);
  min-width: rem-calc(160px);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: rem-calc(50px);
  margin-top: 8%;
}

.formimage1 {
  @include rfs(30px, width);
  min-width: rem-calc(30px);
  margin-left: auto;
  float: right;
  margin-right: auto;
  cursor: pointer;
  padding-right: 5px;
}

.text1 {
  @include font-size(56px);
  margin-bottom: rem-calc(-60px);
  font-weight: 700;
  line-height: divide(70, 50);
  margin-left: auto;
  margin-right: auto;
  max-width: em-calc(550, 40);
  margin-top: 0%;
  text-align: center;
  text-transform: uppercase;

  strong {
    color: $white;
  }
  span {
    color: $primary;
  }
}

.text3 {
  @include font-size(26px);
  @include margin-bottom(-200px);
  max-width: em-calc(730, 22);
  font-weight: 400;
  max-width: 60%;
  margin: 0 auto;
  margin-top: 4%;
  text-align: center;
}

.text2 {
  @include font-size(23px);
  @include margin-bottom(65px);
  line-height: divide(30, 22);
  margin-left: auto;
  margin-right: auto;
  max-width: em-calc(480, 22);
  text-align: center;
  font-weight: 500;

  strong {
    color: $primary;
  }
}

.btnRow {
  --gutter-x: #{rem-calc(32px)};
  --gutter-y: #{rem-calc(16px)};
  justify-content: center;

  :global(.col-auto) {
    flex: 0 0 rem-calc(262px);
  }
}

.btn {
  display: inline-block;
  width: 100%;
  font-size: 12px;
  margin-bottom: 14%;
}

.btn span {
  color: #fff;
}
</style>
