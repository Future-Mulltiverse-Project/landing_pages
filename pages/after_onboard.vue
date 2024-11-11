<template>
  <div :class="$style.main">
    <AppHeader style="position: fixed" />
    <div :class="$style.el" class="grid grid-cols-1 gap-5"> 
      <div :class="$style.body" class="flex flex-col items-center justify-center ">        
        <MediaPicture
          :media-class="$style.mediaImg"
          :src="Bg"
          style="background-color: #000000"
          :width="1523"
          :height="3024"
          layout="fill"
        />
        <div class="flex lg:h-screen justify-center items-center"> 
          <AppWrapper class="text-center inline-block align-middle">
            <div :class="$style.logo" class="pt-0 md:pt-24" >
              <MediaPicture :src="Logo" :width="284" :height="284" />
            </div>
            <div :class="$style.text1">
              <p class="font-medium text-center">
                <span>Enter </span>
                <strong>& </strong>
                <span>Experience </span>
                The
                <br />
                <span class=" lg:text-7xl text-5xl" >FUTURE</span>
                <span class="lg:text-7xl text-5xl" style="color: white"> MULTIVERSE</span>
              </p>
            </div>
            <div :class="$style.text2" class="pb-6 pt-6">
              <h4 class="text-center pb-0" >Experience the Future today:</h4>
            </div>
            <div class="grid grid-cols-1 gap-5 pb-14">
              <div class="flex flex-row gap-4 justify-center">
                <button class="btn btn-outline-primary text-white" :class="$style.btn77">
                  <span class="d-flex align-items-center">
                    ENTER <span style="color: #CFB16D !important">FUTURE <br/>
                    MULTIVERSE</span>
                    <DegreeIcon style='float:right; color: white' /> 
                  </span>
                </button>
              </div>
            </div>
          </AppWrapper>  
        </div>
      </div>
    </div>
      <ExploreFooter />
  </div>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import Logo from '~/assets/images/multiverse_header_logo.png';
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import AppHeader from '~/components/AppHeader/AppHeaderServer.vue';
import ExploreFooter from '~/components/Explore/ExploreFooter.vue';
import DegreeIcon from '~/icons/DegreeIcon.vue';
import Bg from '~/assets/images/future-multiverse/multiversebg.png';
</script>

<style lang="scss" module>
.main {
  background-color: $blue-800;
  color: #fff;
  overflow: hidden;
}
.btn77 {
  border: 2px solid #ffffff !important;
  color: #ffffff !important;
  text-align: left;
  padding-bottom: 6px !important;
  padding-top: 6px !important;
  font-weight: 600;
}
.btn7 {
  color: gray !important;
}
svg {
  height: 17px;
  margin-left: 12px;
  width: rem-calc(30px);
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
  //min-height: 100vh;
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
  width: 7%;
  min-width: 7%;
  @media (max-width: 641px) {
    width: 12%;
  }
}
.logo4 {
  width: 20%;
  min-width: 20%;
}

.logo5 {
  width: 13%;
  min-width: 13%;
  @media (max-width: 600px) {
    width: 1%;
    min-width: 1%;
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
  width: 100px;
  min-width: 160px;
  margin-left: auto;
  margin-right: auto;
}

.formimage1 {
  width: 30px;
  min-width: 30px;
  margin-left: auto;
  float: right;
  margin-right: auto;
  cursor: pointer;
  padding-right: 5px;
}

.text1 {
  font-size: 56px;
  font-weight: 700;
  line-height: divide(70, 50);
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
  font-size: 18px;
  max-width: 80%;
  font-weight: 600;
  margin: 0 auto;
  text-align: center;
}

.text2 {
  font-size: 23px;
  line-height: divide(30, 22);
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