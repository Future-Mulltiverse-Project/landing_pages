<template>
  <div class="row" >
    <div class="flex justify-center mt-12 lg:mt-12 mb-12" >
      <div class="relative  w-4/5  lg:w-5/6 max-w-screen-xl">
      <Carousel >
        <CarouselContent>
          <CarouselItem 
            v-for="(item, index) in items" 
            :key="index"
            :style="{ paddingLeft: index === 0 ? '0px' : '' }" 
              class="flex items-center justify-center lg:basis-1/4 basis-1/3"
          >
            <div class="p-1">
              <Card class="grid grid-cols-1 gap-2">
                <CardContent>
                  <img :src="item" class="img_resize lg:h-40 lg:w-44 h-28 w-32" style="  " />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious  />
        <CarouselNext  />
      </Carousel>
    </div>
  </div>

  <div class=" grid grid-cols-1 gap-4 md:grid-cols-3"> 
    <div class="flex justify-center">
      <button class="btn btn-outline-primary font-semibold mr-2 mb-2">website</button>
    </div>
    <div class="flex justify-center">
      <button class="btn btn-outline-primary font-semibold mr-2 mb-2">Matrix</button>
    </div>
    <div class="flex justify-center">
      <button class="btn btn-outline-primary font-semibold mr-2 mb-2">Experience in fxpo</button>
    </div>
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
import sliderImage1 from '~/assets/images/slider/second_slider/slider_1.png';
import sliderImage2 from '~/assets/images/slider/second_slider/slider_2.png';
import sliderImage3 from '~/assets/images/slider/second_slider/slider_3.png';
import sliderImage4 from '~/assets/images/slider/second_slider/slider_4.png';
import sliderImage5 from '~/assets/images/slider/second_slider/slider_5.png';
import { Carousel, CarouselNext, CarouselContent, CarouselItem, CarouselPrevious } from '@/components/ui/carousel';

const items = [sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5];
</script>

<style lang="scss" module>
.mySwiper {
  width: 100%;
  height: 100%;
}

.btn {
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
