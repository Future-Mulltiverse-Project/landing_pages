<template>
  <div class="row"  style="background-color: #15172E;">
      
      <div class="row" style="padding-right: 0px !important;padding-left: 30px !important;">
        <swiper
          :modules="[Navigation, Pagination]"
          :spaceBetween="0"
          :slidesPerView="6"
          navigation
          :pagination="{ clickable: true }"
          class="mySwiper"
          style="background-color: #15172E;"
        >
          <swiper-slide v-for="(item, index) in items" :key="index">
            <img :src="item" style="width: 100% !important; height: 90% !important;" draggable="true" />
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
  import sliderImage1 from '~/assets/images/slider/quest/slider_1.png';
  import sliderImage2 from '~/assets/images/slider/quest/slider_2.png';
  import sliderImage3 from '~/assets/images/slider/quest/slider_3.png';
  import sliderImage4 from '~/assets/images/slider/quest/slider_4.png';
  import sliderImage5 from '~/assets/images/slider/quest/slider_5.png';
  import sliderImage6 from '~/assets/images/slider/quest/slider_6.png';
  import sliderImage7 from '~/assets/images/slider/quest/slider_7.png';
  import sliderImage8 from '~/assets/images/slider/quest/slider_8.png';
  import sliderImage9 from '~/assets/images/slider/quest/slider_9.png';
  import sliderImage10 from '~/assets/images/slider/quest/slider_10.png';
  import sliderImage11 from '~/assets/images/slider/quest/slider_11.png';
  import sliderImage12 from '~/assets/images/slider/quest/slider_12.png';
  import sliderImage13 from '~/assets/images/slider/quest/slider_13.png';
  import sliderImage14 from '~/assets/images/slider/quest/slider_14.png';
  import sliderImage15 from '~/assets/images/slider/quest/slider_15.png';
  import sliderImage16 from '~/assets/images/slider/quest/slider_16.png';
  
  const items = [
     sliderImage1,
     sliderImage2,
     sliderImage3,
     sliderImage4,
     sliderImage5,
     sliderImage6,
     sliderImage7,
     sliderImage8,
     sliderImage9,
     sliderImage10,
     sliderImage11,
     sliderImage12,
     sliderImage13,
     sliderImage14,
     sliderImage15,
     sliderImage16
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
  