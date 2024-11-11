<template>
  <section :class="$style.section">
          <div class="row" :class="$style.row">
            <p style="text-align: center; font-size: 25px" class='font-medium' ><span style="color: #CFB16D">Some of Our</span> Business <span style="color: #CFB16D">&</span> Technologies Partners<span style="color: #CFB16D">:</span></p>
          </div>
          <div class="row">
            <div class="col-md-12">
                        <img
                            :src="Video"
                            alt="FUTURE Image"
                            :class="$style.video"
                            class=" mb-12 pt-4"
                            style="padding-left: 13px; padding-right: 13px;"
                            :width="1260"
                            :height="300"
                        />
            </div>
          </div>
    <div class="grid pl-6 pr-6">
      <h1 style="text-align: left;  font-size: 30px;" class="font-medium" ><span style="color: #CFB16D;">Example Impressions</span></h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 mb-2 ">
        <div>
            <img
                src="@/assets/images/impressions/big_image.png"
                alt="FUTURE Image"
                class="custom-image md:w_99 w-full "
               
            />
        </div>
        <div class="grid grid-cols-2 gap-3 ">
            <div class="row" style="padding-right: 2px !important;">
                  <div class="flex justify-left lg:justify-center mb-10 mt-8 lg:mt-0">
                        <img
                            src="@/assets/images/impressions/small_image_1.png"
                            alt="FUTURE Image"
                            class="custom-image"
                            :class="$style['custom-image']"
                        />
                </div>
                <div class="col-md-6" style="padding-right: 0px !important;">
                  <div class="flex  justify-left lg:justify-center">
                        <img
                            src="@/assets/images/impressions/small_image_3.png"
                            alt="FUTURE Image"
                            class="custom-image"
                            :class="$style['custom-image']"
                        />
                    </div>
                </div>
            </div>
            <div class="row" style="padding-right: 2px !important;">
                  <div class="flex lg:justify-start justify-end mb-10  mt-8 lg:mt-0">
                        <img
                            src="@/assets/images/impressions/small_image_2.png"
                            alt="FUTURE Image"
                            class="custom-image"
                            style="padding-right: 0px !important;"
                            :class="$style['custom-image']"
                        />
                </div>
                <div class="col-md-6" style="padding-right: 0px !important;">
                  <div class="flex lg:justify-start justify-end">
                        <img
                            src="@/assets/images/impressions/small_image_4.png"
                            alt="FUTURE Image"
                            class="custom-image"
                            :class="$style['custom-image']"
                        />
                    </div>
                </div>
            </div>
        </div>  
      </div>
    </div>
    

    <div class="flex justify-center pr-6 pl-2 mt-12 lg:mt-12" >
      <div class="relative  w-4/5  lg:w-5/6 max-w-screen-xl">
        <Carousel v-slot="{ canScrollNext, canScrollPrev }" :perPage="responsivePerPage" :breakpoints="breakpoints">
          <CarouselPrevious v-if="canScrollPrev" />
          <CarouselNext v-if="canScrollNext" />
          <CarouselContent>
            <CarouselItem 
              v-for="(item, index) in items" 
              :key="index"
              :style="{ paddingLeft: index === 0 ? '0px' : '' }" 
              class="flex items-center justify-center lg:basis-1/4 basis-1/3"
            >
              <Card class="grid grid-cols-1 gap-2">
                <CardContent>
                  <img :src="item" class="img_resize lg:h-40 lg:w-44 h-28 w-32" style="  " />
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
      
  </section>

</template>


<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import returnIcon from '~/icons/returnIcon.vue';
import { Navigation, Pagination } from 'swiper';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import cardImage from '~/assets/images/slider/card_slider.png';
import sliderImage1 from '~/assets/images/slider/fxpo_slider/slider_1.png';
import sliderImage2 from '~/assets/images/slider/fxpo_slider/slider_2.png';
import sliderImage3 from '~/assets/images/slider/fxpo_slider/slider_3.png';
import sliderImage4 from '~/assets/images/slider/fxpo_slider/slider_4.png';
import Video from '~/assets/images/logos_future.png';
import MediaPicture from '~/components/Media/MediaPicture.vue'; 
import { Carousel, CarouselNext, CarouselContent, CarouselItem, CarouselPrevious } from '@/components/ui/carousel';

const items = [
   sliderImage1,
   sliderImage2,
   sliderImage3,
   sliderImage4,
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

.row{
    padding-right: 0px !important;
}

h4 {
    text-align: left;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 20px;
}
.section {
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  position: relative;
  max-width: 1168px;
  margin: 0 auto;
}


.img_resize{

}
.primaryText {
  color: $primary; /* Replace $primary with your desired primary text color */
}

.custom-image {
  width: 86% !important;
}

.heading {
  font-size: 28px;
  margin-bottom: 28px;
  color: #ffffff;
  font-weight: 600;
  line-height: divide(30, 28);
}

.title {
  font-size: 45px;
  margin-bottom: 64px;
  line-height: divide(55, 45);
  margin-left: auto;
  margin-right: auto;
  max-width: 26ch;
  text-transform: uppercase;
  margin-bottom: 00px;
}
</style>
