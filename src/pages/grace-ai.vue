<template>
  <div :class="$style.el">
    <AiHeader />
    <AiNavPanel />
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
          <strong>HEY, I am </strong>
          <span>Grace</span>!

          <br />

          <strong>Your Future </strong>
          <span>Guide</span>.
        </div>
        <div :class="$style.text2">
          Welcome to the
          <strong>Future Multiverse</strong>!

          <br />
          What would you like to
          <strong>explore</strong>
          today<strong>?</strong>
        </div>
        <div class="row" :class="$style.btnRow">
          <div class="col-auto">
            <NuxtLink
              to="/"
              class="btn btn-outline-primary"
              :class="$style.btn1"
            >
              <span>FUTURE MULTIVERSE</span>
              QUEST
              <Span>(COMING NEXT)</Span>
            </NuxtLink>
          </div>
          <div class="col-auto">
            <NuxtLink
              to="/"
              class="btn btn-outline-primary"
              :class="$style.btn"
            >
              GUIDE
              <span>BOOK</span>
            </NuxtLink>
          </div>
        </div>

        <div :class="$style.text3">
          <strong>How can I help you&nbsp;</strong>
          today
          <strong>?</strong>
        </div>

        <div class="row" :class="$style.form">
          <div :class="$style.logo4" class="col-md-4"></div>
          <div :class="$style.input" class="col-md-6">
            <input
              :class="$style.chat_message"
              type="text"
              placeholder="Write your message"
            />
            <a :class="$style.formimage1">
              <MediaPicture :src="FormImage3" :width="2" :height="2" />
            </a>
            <a :class="$style.formimage1">
              <MediaPicture :src="FormImage2" :width="2" :height="2" />
            </a>
            <a :class="$style.formimage1">
              <MediaPicture :src="FormImage1" :width="2" :height="2" />
            </a>
          </div>
          <div :class="$style.logo5" class="col-md-1"></div>
          <div :class="$style.logo50" class="col-md-1"></div>
          <div :class="$style.logo60" class="col-md-1"></div>
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
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import Bg from 'assets/images/graceai/wormhole.png';
import Logo from 'assets/images/graceai/new-logo2.png';
import FormImage1 from 'assets/images/graceai/form_image_1.png';
import FormImage2 from 'assets/images/graceai/form_image_2.png';
import FormImage3 from 'assets/images/graceai/form_image_3.png';
import GraceAILogo from 'assets/images/graceai/GraceAILogo.png';
import ExploreFooter from '~/components/Explore/ExploreFooter.vue';
import AiHeader from '~/components/AI/AiHeader.vue';
import AiNavPanel from '~/components/NavPanel/AiNavPanel.vue';

</script>

<style lang="scss" module>
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
  @media (max-width: 1200px) {
    max-width: 100%;
  }
}

.input {
  background-color: rgb(255, 255, 255);
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  width: 60%;
  @media (max-width: 1200px) {
    width: 90%;
  }
}

.logo2 {
  @include rfs(7%, width);
  min-width: rem-calc(7%);
  
  @media (max-width: 1200px) {
    display: none;
  }
}
.logo4 {
  @include rfs(20%, width);
  min-width: rem-calc(20%);
  @media (max-width: 1200px) {
    width: 0%;
  }
}

.logo5 {
  @include rfs(5%, width);
  min-width: rem-calc(5%);
  @media (max-width: 1200px) {
    width: 0%;
  }
}
.logo50 {
  @include rfs(4%, width);
  min-width: rem-calc(4%);
  @media (max-width: 1200px) {
    width: 0%;
  }
}
.logo60 {
  @include rfs(4%, width);
  min-width: rem-calc(4%);
  @media (max-width: 1200px) {
    width: 0%;
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
  margin-bottom: rem-calc(30px);
  font-weight: 700;
  line-height: divide(70, 50);
  margin-left: auto;
  margin-right: auto;
  max-width: em-calc(550, 40);
  margin-top: -5%;
  text-align: center;
  text-transform: uppercase;

  strong {
    color: $white;
  }
  span {
    color: $primary;
  }
}

.logo {
  @include rfs(100px, width);
  min-width: rem-calc(260px);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: rem-calc(50px);
  margin-top: 5%;
}

.text3 {
  @include font-size(18px);
  @include margin-bottom(-50px);
  max-width: em-calc(730, 22);
  font-weight: 400;

  max-width: 60%;
  align-content: center;
  margin: 0 auto;
  margin-top: 4%;
  display: flex;
  align-items: center;

  strong {
    color: $primary;
  }
  @media (max-width: 1200px) {
    max-width: 90%;
  }
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

.btn1 {
  display: inline-block;
  width: 100%;
  height:60%;
  font-size: 12px;
  text-align: center;
  margin-bottom:17%;
  @media (max-width: 1200px) {
    width: 300px;
  }
}

.btn {
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  width: 100%;
  height: 60%;
  font-size: 12px;
  margin-bottom: 14%;
  @media (max-width: 1200px) {
    width: 300px;
  }
}
.btn1 span {
  color: #fff;
}
.btn span {
  color: #fff;
}
</style>
