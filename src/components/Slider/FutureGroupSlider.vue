<template>
  <div class="row" >
      <AppWrapper>
        <div class="flex justify-center">
          <Carousel v-slot="{ canScrollNext, canScrollPrev }" class="relative w-full max-w-screen-xl">
            <CarouselContent>
              <CarouselItem class="basis-1/5" style="padding-left: 0px" v-for="(item, index) in items" :key="index">
                <div class="p-1">
                  <Card class="grid grid-cols-1 gap-2">
                    <CardContent class="flex  items-center justify-center">
                      <img :src="item" class="size-40" style="height: 13rem;" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious v-if="canScrollPrev" />
            <CarouselNext v-if="canScrollNext" />
          </Carousel>
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
  import sliderImage4 from '~/assets/images/slider/future_group_slider/slider_4.png';
  import sliderImage5 from '~/assets/images/slider/future_group_slider/slider_5.png';
  
  const items = [
     sliderImage1,
     sliderImage2,
     sliderImage3,
     sliderImage4,
     sliderImage5
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
  