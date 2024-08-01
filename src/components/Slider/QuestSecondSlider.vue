<template>
  <div class="row"  style="background-color: #0A0D1D;">
      
      <div class="row" style="padding-right: 0px !important;padding-left: 30px !important;">
        <swiper
          :modules="[Navigation, Pagination]"
          :spaceBetween="0"
          :slidesPerView="4"
          navigation
          :pagination="{ clickable: true }"
          class="mySwiper"
          style="background-color: #0A0D1D;"
        >
          <swiper-slide v-for="(item, index) in items" :key="index">
            <img :src="item" style="width: 100% !important; height: 100% !important;" draggable="true" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
      <div class="row" style='margin-top: 40px;'>
        <div class="col-md-4"></div>
        <div class="col-md-6">
            <NuxtLink to="/" class="btn btn-outline-primary" :class="$style.btn"  style="padding-top: 22px; padding-bottom: 22px; color:white; font-weight: 500;">
                WEBSITE
            </NuxtLink>
            <NuxtLink to="/" class="btn btn-outline-primary" :class="$style.btn" style="padding-top: 22px; padding-bottom: 22px; color: white; font-weight: 500;">
                MATRIX
            </NuxtLink>
            <NuxtLink to="/" class="btn btn-outline-primary" :class="$style.btn" style="font-weight: 500; background-color: #CFB16D; color:white" >
                EXPERIENCE <br/>IN FXPO
            </NuxtLink>
        </div>
        <div class="col-md-2"></div>
      </div>
  </template>
  
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import returnIcon from '~/icons/returnIcon.vue';
  import { Navigation, Pagination } from 'swiper';
  import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
  import cardImage from '~/assets/images/slider/card_slider.png';
  import sliderImage1 from '~/assets/images/slider/second_slider/slider_1.png';
  import sliderImage2 from '~/assets/images/slider/second_slider/slider_2.png';
  import sliderImage3 from '~/assets/images/slider/second_slider/slider_3.png';
  import sliderImage4 from '~/assets/images/slider/second_slider/slider_4.png';
  
  const items = [
     sliderImage1,
     sliderImage2,
     sliderImage3,
     sliderImage4
  ];
  </script>
  

  <style lang="scss" module>
  .mySwiper {
    width: 100%;
    height: 100%;
  }

.btn{
    margin-right: 20px;
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
  