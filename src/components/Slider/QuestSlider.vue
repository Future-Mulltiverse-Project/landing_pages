<template>
  <div class="row"  style="background-color: #15172E;">
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
          <div style=" background-image: url(/_nuxt/assets/images/slider/slider_background.png); background-repeat: no-repeat; background-size: cover;  height: 900px">
              <div class="row">
                  <MediaPicture :src="item" :width="1440" :height="968" layout="fill" />
                  <AppWrapper>
                      <div class='col-md-12' style="margin-top: 11%;">
                          <h1 style="margin-bottom: 50px;"><span style="color: #CFB16D;"> Future Trends Africa Manifesto</span><br/> 
                              <span style="color: white;">The Surprise Rise of Africa</span>
                          </h1>
                          
                          <div class="row">
                              <div class="col-md-4">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                  </p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                  </p>
                                  <br/>
                                  
                                  <div class="col-auto">
                                      <NuxtLink :class="$style.btnLink" to="/">
                                      <returnIcon />
                                      <span style="color: white; line-height: 1">Click to rotate view</span>
                                      </NuxtLink>
                                  </div>
                              </div>
                              <div class="col-md-4"></div>
                              <div class="col-md-4">
                                  <div class="card" style="width: 22rem; background-color: #15172E;">
                                      <img class="card-img-top" :src="cardImage" alt="Card image cap" style="width: 100%;">
                                      <div class="card-body"  style="padding: 40px;" >
                                          <h5 class="card-title" style="text-align: center; color:white">Malawi Forever!</h5>
                                          <hr style="border: white 2px solid ; margin-left: 35%; margin-right: 35%; color:white; opacity: 1" />
                                          <p class="card-text" style="color: #9C9C9C; text-align: center " >At vero eos et accusamu
                                              iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                          <a href="#" style="margin-left: 25%;" class="btn btn-outline-primary">Read More</a>
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
      </div>
      
      <div class="row" style="padding-right: 0px !important;padding-left: 30px !important;">
        <swiper
          :modules="[Navigation, Pagination]"
          :spaceBetween="0"
          :slidesPerView="7"
          navigation
          :pagination="{ clickable: true }"
          class="mySwiper"
          style="background-color: #15172E;"
        >
          <swiper-slide v-for="(item, index) in items" :key="index">
            <img :src="item" style="width: 100% !important; height: 100% !important;" draggable="true" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import returnIcon from '~/icons/returnIcon.vue';
  import { Navigation, Pagination } from 'swiper';
  import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
  import cardImage from '~/assets/images/slider/card_slider.png';
  import sliderImage1 from '~/assets/images/slider/slider_1.png';
  import sliderImage2 from '~/assets/images/slider/slider_2.png';
  import sliderImage3 from '~/assets/images/slider/slider_3.png';
  import sliderImage4 from '~/assets/images/slider/slider_4.png';
  import sliderImage5 from '~/assets/images/slider/slider_5.png';
  
  const items = [
     sliderImage1,
     sliderImage2,
     sliderImage3,
     sliderImage4,
     sliderImage5,
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
  