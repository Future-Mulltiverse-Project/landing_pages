<template>
  <div class="row"  style="background-color: #0A0D1D;">
      <div class="row" style="padding-right: 0px !important;padding-left: 30px !important;">
      <swiper
        :modules="[Navigation]"
        :spaceBetween="0"
        :slidesPerView="1"
        navigation
        :pagination="{ clickable: true }"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <div style=" background-image: url(/_nuxt/assets/images/mos_background.png); background-repeat: no-repeat; background-size: cover;  height: 900px">
              <div class="row">
                  <MediaPicture :src="item" :width="1440" :height="968" layout="fill" />
                  <AppWrapper>
                      <div class='col-md-12' style="margin-top: 11%;">
                          <h1 style="margin-bottom: 50px;"><span style="color: #CFB16D;">The Collective Peaceful Surprise</span><br/> 
                              <span style="color: white;">Rise of Africa / Humanity</span>
                          </h1>
                          
                          <div class="row">
                              <div class="col-md-6">
                                  <p>Dr. Farzam Kamalabadi & the Future Trends Group's "Collective Peaceful Rise / Surprise Rise of Humanity, including the Collective 
                                    Peaceful Rise of Africa", envisions transforming Africa using the Future Trends model for equitable wealth creation and distribution, 
                                    targeting a $50-$60 trillion economy and 20-30 nations reaching $1 trillion each within only one decade.  
                                  </p>
                                  <p>Inspired by his success in China, Kamalabadi's strategy includes consensus-building, as well as project aggregation.  </p>
                                  <p>Renowned for facilitating over $35 billion in historic transactions, he promotes self-regenerative economies issuing outbound debt, 
                                    aiming for a prosperous Africa with global 
                                    impact, supported by all African and global leaders.
                                  </p>
                                  <br/>
                                  
                                  <div class="col-auto">
                                    <div class="row">
                                      <div class="col-md-12" >
                                          <NuxtLink to="/" class="btn btn-outline-primary" :class="$style.btn" style=" margin-right: 10px; color: white; font-weight: 500;">
                                              LEARN MORE
                                          </NuxtLink>
                                          <NuxtLink to="/" class="btn btn-outline-primary" :class="$style.btn" style="font-weight: 500; background-color: #CFB16D; color:white" >
                                              EXPERIENCE <ThreeSixtyIcon style="margin-left: 6px;" /> 
                                          </NuxtLink>
                                      </div>
                                    </div>
                                      <!--NuxtLink :class="$style.btnLink" to="/">
                                      <returnIcon />
                                      <span style="color: white; line-height: 1">Click to rotate view</span>
                                      </NuxtLink-->
                                  </div>
                              </div>
                              <div class="col-md-2"></div>
                              <div class="col-md-4">
                                  <div class="card" style="width: 22rem; background-color: #15172E;">
                                      <img class="card-img-top" :src="cardImage" alt="Card image cap" style="width: 100%;">
                                      <div class="card-body"  style="padding: 30px;" >
                                          <h5 class="card-title" style="text-align: center; color:white">The Future is Now!</h5>
                                          <hr style="border: white 2px solid ; margin-left: 35%; margin-right: 35%; color:white; opacity: 1" />
                                          <p class="card-text" style="color: #9C9C9C; text-align: center " >The Future Multiverse & EXPO is
                                          created to be a catalyst for Humanitys' destined Future</p>
                                          <a href="#" style="margin-left: 25%; color: white" class="btn btn-outline-primary">Explore <ThreeSixtyIcon style="margin-left: 6px;" />  </a>
                                      </div>
                                  </div>  
                              </div>
                          </div>
                      </div>
                  </AppWrapper>
              </div>
          </div>
        </swiper-slide>
      </swiper>
      

    <AppWrapper style="max-width: 1400px; margin-left:16%">
          <swiper
            :modules="[Navigation, Pagination]"
            :spaceBetween="0"
            :slidesPerView="6"
            navigation
            :pagination="{ clickable: true }"
            class="mySwiper"
            style="background-color: #0A0D1D;"
          >

          <swiper-slide v-for="(item, index) in items" :key="index" style="width: unset !important ; min-width: 120px !important; max-width: 300px !important;  min-height: 170px !important; max-height: 300px !important; ">
              <img :src="item" style="height: 230px !important; width: 100% !important;" draggable="true" />
            </swiper-slide>
          </swiper>
          
     </AppWrapper>
      </div>

    </div>
  </template>
  
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import returnIcon from '~/icons/returnIcon.vue';
  import { Navigation, Pagination } from 'swiper';
  import ThreeSixtyIcon from '~/icons/ThreeSixtyIcon.vue';
  import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
  import cardImage from '~/assets/images/slider/card_slider.png';
  import sliderImage1 from '~/assets/images/slider/slider_2.png';
  import sliderImage2 from '~/assets/images/slider/slider_3.png';
  import sliderImage3 from '~/assets/images/slider/slider_7.png';
  import sliderImage4 from '~/assets/images/slider/slider_8.png';
  import sliderImage5 from '~/assets/images/slider/slider_10.png';
  
  const items = [
     sliderImage1,
     sliderImage2,
     sliderImage3,
     sliderImage4,
     sliderImage5,
  ];
  </script>
  

  <style lang="scss" module>
  .mySwiper {
    width: 100%;
    height: 100%;
  }

  
.btnLink {
  font-size: 25px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  transition: color 150ms ease-in-out;

  &:hover {
    color: #fff;
  }

  svg {
    margin-right: 7px;
    padding-right: 10px;
    width: rem-calc(66px);
    height: rem-calc(68px);
  }
}
  </style>
  