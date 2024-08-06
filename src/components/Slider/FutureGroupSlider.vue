<template>
  <div class="row"  style="background-color: #0A0D1D;">
      <AppWrapper>
        
        <div class="row" style="padding-right: 0px !important; margin-bottom: 50px; margin-top:40px; ">
          <swiper
            :modules="[Navigation, Pagination]"
            :spaceBetween="0"
            :slidesPerView="3"
            navigation
            :pagination="{ clickable: true }"
            class="mySwiper"
            style="background-color: #0A0D1D;"
          >
          <swiper-slide v-for="(item, index) in items" :key="index" style="width: unset !important ; min-height: 166px; max-height: 300px; min-width: 120 !important; max-width: 500px !important; ">
              <img :src="item" style="width: 100% !important; height: 88% !important;" draggable="true" />
            </swiper-slide>
          </swiper>
        </div> 
     </AppWrapper>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import returnIcon from '~/icons/returnIcon.vue';
  import { Navigation, Pagination } from 'swiper';
  import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
  import cardImage from '~/assets/images/slider/card_slider.png';
  import sliderImage1 from '~/assets/images/slider/future_group_slider/slider_1.png';
  import sliderImage2 from '~/assets/images/slider/future_group_slider/slider_2.png';
  import sliderImage3 from '~/assets/images/slider/future_group_slider/slider_3.png';
  
  const items = [
     sliderImage1,
     sliderImage2,
     sliderImage3
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
  