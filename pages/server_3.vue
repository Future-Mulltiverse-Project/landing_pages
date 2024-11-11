<template>
  <div :class="$style.el">
    <AppHeader />
    <div :class="$style.body" class="pt-8 lg:pt-24 pb-14" >
      <MediaPicture
        :class="$style.bg"
        :src="Bg"
        :width="1927"
        :height="881"
        layout="fill"
      />
      <AppWrapper>
        <div :class="$style.text2">
          <div class="grid grid-cols-4 gap-5 pb-2 md:pb-0 pt-8">
            <div class="col-span-3">
              <p
                class="text-left text-2xl pl-3 font-semibold"
                style="color: #cfb16d"
              >
                Top Servers
              </p>
            </div>
            <div class="grid grid-cols-1 gap-2 md:pr-0 pr-5">
              <div class="flex justify-end">
                <img
                  class="mr-3 w-12 h-12"
                  src="@/assets/images/explore/filter_button.png"
                  alt="img"
                />
                <img
                  class="w-12 h-12"
                  src="@/assets/images/explore/show_button.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4" >

          <div class="max-w-full pl-4 md:pl-0 md:pr-0 pr-5 pb-8 md:pb-0 rounded overflow-hidden shadow-lg">
            <img class="w-full" src="@/assets/images/server_1.png" alt="img">
            <div class="px-6 py-4" style="background-color:  #161A32;">
              <div class="grid grid-cols-2 gap-3 mb-5" >
                <div>
                  <img class="w-20" style="margin-top: -50px;" src="@/assets/images/azuki.png" alt="img">
                </div>
                <div>
                  <img class="w-8 float-right" src="@/assets/images/germany_flag.png" alt="img">
                </div>
              </div>
              <div class="font-bold text-xl mb-2">Azuki Corp Server 01 in Mainz, Germany</div>
              <div class="grid grid-cols-3 gap-1 mt-5 mb-5">
                <div style="border-right: grey solid 2px">
                  <p
                    class="font-semibold text-center text-lg"
                    style="color: #cfb16d"
                  >
                    244 
                  </p>     
                  <p class="font-semibold text-gray-400 text-center text-base">
                    ONLINE 
                  </p>   
                </div>
                <div style="border-right: grey solid 2px;">
                  <p class="font-semibold text-center text-base" style="color: #CFB16D">
                    500 
                  </p>     
                  <p class="font-semibold text-center text-gray-400 text-base">
                    SLOTS 
                  </p>                  
                </div>
                <div>
                  <p class="font-semibold text-center text-base" style="color: #CFB16D">
                    12m/s 
                  </p>     
                  <p class="font-semibold text-center text-gray-400 text-base">
                    PING 
                  </p>               
                </div>
              </div>
            </div>
            <div
              class="px-6 pt-6 pb-2"
              style="background-color: #11152b"
            >
              <div class="grid grid-cols-2 gap-3 mb-5">
                <div>
                  <p
                    class="font-semibold text-base pt-2"
                    style="color: #cfb16d"
                  >
                    READ MORE
                  </p>
                </div>
                <div>
                  <button
                    class="font-semibold float-right"
                    style="
                      background-color: #cfb16d;
                      padding-top: 7px;
                      padding-bottom: 7px;
                      padding-left: 20px;
                      padding-right: 20px;
                    "
                  >
                    ENTER SERVER
                  </button>
                </div>
              </div>
            </div>

          </div>          
          <div class="max-w-full pl-4 md:pl-0 md:pr-0 pr-5 pb-8 md:pb-0 rounded overflow-hidden shadow-lg">
            <img class="w-full" src="@/assets/images/server_2.png" alt="img">
            <div class="px-6 py-4" style="background-color:  #161A32;">
              <div class="grid grid-cols-2 gap-3 mb-5" >
                <div>
                  <img class="w-20" style="margin-top: -50px;" src="@/assets/images/thunder.png" alt="img">
                </div>
                <div>
                  <img class="w-8 float-right" src="@/assets/images/germany_flag.png" alt="img">
                </div>
              </div>
              <div class="font-bold text-xl mb-2">Azuki Corp Server 01 in Mainz, Germany</div>
              <div class="grid grid-cols-3 gap-1 mt-5 mb-5">
                <div style="border-right: grey solid 2px">
                  <p
                    class="font-semibold text-center text-lg"
                    style="color: #cfb16d"
                  >
                    244 
                  </p>     
                  <p class="font-semibold text-gray-400 text-center text-base">
                    ONLINE 
                  </p>   
                </div>
                <div style="border-right: grey solid 2px;">
                  <p class="font-semibold text-center text-base" style="color: #CFB16D">
                    500 
                  </p>     
                  <p class="font-semibold text-center text-gray-400 text-base">
                    SLOTS 
                  </p>                  
                </div>
                <div>
                  <p class="font-semibold text-center text-base" style="color: #CFB16D">
                    12m/s 
                  </p>     
                  <p class="font-semibold text-center text-gray-400 text-base">
                    PING 
                  </p>               
                </div>
              </div>
            </div>
            <div
              class="px-6 pt-6 pb-2"
              style="background-color: #11152b"
            >
              <div class="grid grid-cols-2 gap-3 mb-5">
                <div>
                  <p
                    class="font-semibold text-base pt-2"
                    style="color: #cfb16d"
                  >
                    READ MORE
                  </p>
                </div>
                <div>
                  <button
                    class="font-semibold float-right"
                    style="
                      background-color: #cfb16d;
                      padding-top: 7px;
                      padding-bottom: 7px;
                      padding-left: 20px;
                      padding-right: 20px;
                    "
                  >
                    ENTER SERVER
                  </button>
                </div>
              </div>
            </div>

          </div> 
          <div class="max-w-full pl-4 md:pl-0 md:pr-0 pr-5 pb-8 md:pb-0 rounded overflow-hidden shadow-lg">
            <img class="w-full" src="@/assets/images/server_3.png" alt="img">
            <div class="px-6 py-4" style="background-color:  #161A32;">
              <div class="grid grid-cols-2 gap-3 mb-5" >
                <div>
                  <img class="w-20" style="margin-top: -50px;" src="@/assets/images/bakc.png" alt="img">
                </div>
                <div>
                  <img class="w-8 float-right" src="@/assets/images/germany_flag.png" alt="img">
                </div>
              </div>
              <div class="font-bold text-xl mb-2">Azuki Corp Server 01 in Mainz, Germany</div>
              <div class="grid grid-cols-3 gap-1 mt-5 mb-5">
                <div style="border-right: grey solid 2px">
                  <p
                    class="font-semibold text-center text-lg"
                    style="color: #cfb16d"
                  >
                    244 
                  </p>     
                  <p class="font-semibold text-gray-400 text-center text-base">
                    ONLINE 
                  </p>   
                </div>
                <div style="border-right: grey solid 2px;">
                  <p class="font-semibold text-center text-base" style="color: #CFB16D">
                    500 
                  </p>     
                  <p class="font-semibold text-center text-gray-400 text-base">
                    SLOTS 
                  </p>                  
                </div>
                <div>
                  <p class="font-semibold text-center text-base" style="color: #CFB16D">
                    12m/s 
                  </p>     
                  <p class="font-semibold text-center text-gray-400 text-base">
                    PING 
                  </p>               
                </div>
              </div>
            </div>
            <div
              class="px-6 pt-6 pb-2"
              style="background-color: #11152b"
            >
              <div class="grid grid-cols-2 gap-3 mb-5">
                <div>
                  <p
                    class="font-semibold text-base pt-2"
                    style="color: #cfb16d"
                  >
                    READ MORE
                  </p>
                </div>
                <div>
                  <button
                    class="font-semibold float-right"
                    style="
                      background-color: #cfb16d;
                      padding-top: 7px;
                      padding-bottom: 7px;
                      padding-left: 20px;
                      padding-right: 20px;
                    "
                  >
                    ENTER SERVER
                  </button>
                </div>
              </div>
            </div>

          </div> 

          <div class="max-w-full pl-4 md:pl-0 md:pr-0 pr-5 pb-8 md:pb-0 rounded overflow-hidden shadow-lg">
            <img class="w-full" src="@/assets/images/server_1.png" alt="img">
            <div class="px-6 py-4" style="background-color:  #161A32;">
              <div class="grid grid-cols-2 gap-3 mb-5" >
                <div>
                  <img class="w-20" style="margin-top: -50px;" src="@/assets/images/azuki.png" alt="img">
                </div>
                <div>
                  <img class="w-8 float-right" src="@/assets/images/germany_flag.png" alt="img">
                </div>
              </div>
              <div class="font-bold text-xl mb-2">Azuki Corp Server 01 in Mainz, Germany</div>
              <div class="grid grid-cols-3 gap-1 mt-5 mb-5">
                <div style="border-right: grey solid 2px">
                  <p
                    class="font-semibold text-center text-lg"
                    style="color: #cfb16d"
                  >
                    244 
                  </p>     
                  <p class="font-semibold text-gray-400 text-center text-base">
                    ONLINE 
                  </p>   
                </div>
                <div style="border-right: grey solid 2px;">
                  <p class="font-semibold text-center text-base" style="color: #CFB16D">
                    500 
                  </p>     
                  <p class="font-semibold text-center text-gray-400 text-base">
                    SLOTS 
                  </p>                  
                </div>
                <div>
                  <p class="font-semibold text-center text-base" style="color: #CFB16D">
                    12m/s 
                  </p>     
                  <p class="font-semibold text-center text-gray-400 text-base">
                    PING 
                  </p>               
                </div>
              </div>
            </div>
            <div
              class="px-6 pt-6 pb-2"
              style="background-color: #11152b"
            >
              <div class="grid grid-cols-2 gap-3 mb-5">
                <div>
                  <p
                    class="font-semibold text-base pt-2"
                    style="color: #cfb16d"
                  >
                    READ MORE
                  </p>
                </div>
                <div>
                  <button
                    class="font-semibold float-right"
                    style="
                      background-color: #cfb16d;
                      padding-top: 7px;
                      padding-bottom: 7px;
                      padding-left: 20px;
                      padding-right: 20px;
                    "
                  >
                    ENTER SERVER
                  </button>
                </div>
              </div>
            </div>

          </div>          
          <div class="max-w-full pl-4 md:pl-0 md:pr-0 pr-5 pb-8 md:pb-0 rounded overflow-hidden shadow-lg">
            <img class="w-full" src="@/assets/images/server_2.png" alt="img">
            <div class="px-6 py-4" style="background-color:  #161A32;">
              <div class="grid grid-cols-2 gap-3 mb-5" >
                <div>
                  <img class="w-20" style="margin-top: -50px;" src="@/assets/images/thunder.png" alt="img">
                </div>
                <div>
                  <img class="w-8 float-right" src="@/assets/images/germany_flag.png" alt="img">
                </div>
              </div>
              <div class="font-bold text-xl mb-2">Azuki Corp Server 01 in Mainz, Germany</div>
              <div class="grid grid-cols-3 gap-1 mt-5 mb-5">
                <div style="border-right: grey solid 2px">
                  <p
                    class="font-semibold text-center text-lg"
                    style="color: #cfb16d"
                  >
                    244 
                  </p>     
                  <p class="font-semibold text-gray-400 text-center text-base">
                    ONLINE 
                  </p>   
                </div>
                <div style="border-right: grey solid 2px;">
                  <p class="font-semibold text-center text-base" style="color: #CFB16D">
                    500 
                  </p>     
                  <p class="font-semibold text-center text-gray-400 text-base">
                    SLOTS 
                  </p>                  
                </div>
                <div>
                  <p class="font-semibold text-center text-base" style="color: #CFB16D">
                    12m/s 
                  </p>     
                  <p class="font-semibold text-center text-gray-400 text-base">
                    PING 
                  </p>               
                </div>
              </div>
            </div>
            <div
              class="px-6 pt-6 pb-2"
              style="background-color: #11152b"
            >
              <div class="grid grid-cols-2 gap-3 mb-5">
                <div>
                  <p
                    class="font-semibold text-base pt-2"
                    style="color: #cfb16d"
                  >
                    READ MORE
                  </p>
                </div>
                <div>
                  <button
                    class="font-semibold float-right"
                    style="
                      background-color: #cfb16d;
                      padding-top: 7px;
                      padding-bottom: 7px;
                      padding-left: 20px;
                      padding-right: 20px;
                    "
                  >
                    ENTER SERVER
                  </button>
                </div>
              </div>
            </div>

          </div> 
          <div class="max-w-full pl-4 md:pl-0 md:pr-0 pr-5 pb-8 md:pb-0 rounded overflow-hidden shadow-lg">
            <img class="w-full" src="@/assets/images/server_3.png" alt="img">
            <div class="px-6 py-4" style="background-color:  #161A32;">
              <div class="grid grid-cols-2 gap-3 mb-5" >
                <div>
                  <img class="w-20" style="margin-top: -50px;" src="@/assets/images/bakc.png" alt="img">
                </div>
                <div>
                  <img class="w-8 float-right" src="@/assets/images/germany_flag.png" alt="img">
                </div>
              </div>
              <div class="font-bold text-xl mb-2">Azuki Corp Server 01 in Mainz, Germany</div>
              <div class="grid grid-cols-3 gap-1 mt-5 mb-5">
                <div style="border-right: grey solid 2px">
                  <p
                    class="font-semibold text-center text-lg"
                    style="color: #cfb16d"
                  >
                    244 
                  </p>     
                  <p class="font-semibold text-gray-400 text-center text-base">
                    ONLINE 
                  </p>   
                </div>
                <div style="border-right: grey solid 2px;">
                  <p class="font-semibold text-center text-base" style="color: #CFB16D">
                    500 
                  </p>     
                  <p class="font-semibold text-center text-gray-400 text-base">
                    SLOTS 
                  </p>                  
                </div>
                <div>
                  <p class="font-semibold text-center text-base" style="color: #CFB16D">
                    12m/s 
                  </p>     
                  <p class="font-semibold text-center text-gray-400 text-base">
                    PING 
                  </p>               
                </div>
              </div>
            </div>
            <div
              class="px-6 pt-6 pb-2"
              style="background-color: #11152b"
            >
              <div class="grid grid-cols-2 gap-3 mb-5">
                <div>
                  <p
                    class="font-semibold text-base pt-2"
                    style="color: #cfb16d"
                  >
                    READ MORE
                  </p>
                </div>
                <div>
                  <button
                    class="font-semibold float-right"
                    style="
                      background-color: #cfb16d;
                      padding-top: 7px;
                      padding-bottom: 7px;
                      padding-left: 20px;
                      padding-right: 20px;
                    "
                  >
                    ENTER SERVER
                  </button>
                </div>
              </div>
            </div>

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
import Logo from '~/assets/images/multiverse_header_logo.png';
import GraceAILogo from 'assets/images/graceai/GraceAILogo.png';
import ExploreFooter from '~/components/Explore/ExploreFooter.vue';
import AiHeader from '~/components/AI/FutureMultiverseHeader.vue';
import AppHeader from '~/components/AppHeader/AppHeaderServer.vue';
</script>

<style lang="scss" module>
.btn77 {
  border: 2px solid gray !important;
  color: gray !important;
  text-align: left;
}
.btn7 {
  color: gray !important;
}
svg {
  height: 10px;
  margin-right: 2px;
  width: 30px;
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
  min-width: 10%;
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
  margin-bottom: 50px;
  margin-top: 8%;
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
  line-height: 1.4;
  margin-left: auto;
  margin-right: auto;
  max-width: 650px;
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
  font-size: 26px;
  margin-bottom: -200px;
  max-width: 730px;
  font-weight: 400;
  max-width: 60%;
  margin: 0 auto;
  margin-top: 4%;
  text-align: center;
}

.text2 {
  font-size: 23px;
  margin-bottom: 65px;
  line-height: 1.36;
  text-align: center;
  font-weight: 500;

  strong {
    color: $primary;
  }
}

.btnRow {
  --gutter-x: 32px;
  --gutter-y: 16px;
  justify-content: center;

  :global(.col-auto) {
    flex: 0 0 262px;
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
