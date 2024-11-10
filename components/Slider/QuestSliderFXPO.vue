<template>
  <div class="row"  style="background-color: #0A0D1D;">
      <div class="row" style="padding-right: 0px !important;">
      <swiper
        :modules="[Navigation]"
        :spaceBetween="0"
        :slidesPerView="1"
        navigation
        :pagination="{ clickable: true }"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <div class='mb-10' style=" background-image: url(/_nuxt/assets/images/slider/fxpo_slider/background_image.png); background-repeat: no-repeat; background-size: cover; ">
              <div class="row">
                  <AppWrapper class="pb-12">
                      <div class='col-md-12' style="padding-top:50px !important;">
                          <h1 class="text-4xl font-semibold " style="color: #CFB16D;">The Collective Peaceful Surprise</h1> 
                          <h1 style="color: white;" class="text-4xl pt-2 mb-10 font-medium ">Rise of Africa/Humanity</h1>
                          
                          <div class="grid grid-cols-1 gap-4 md:grid-cols-3 ">
                              <div class="col-span-2">
                                <div class="grid grid-cols-1 gap-4 md:grid-cols-3 ">
                                  <div class="col-span-2">
                                      <p class="font-medium pb-5 text-lg">Dr. Farzam Kamalabadi & the Future Trends Group's "Collective Peaceful Rise / Surprise Rise of Humanity, including 
                                      the Collective Peaceful Rise of Africa", envisions transforming Africa using the Future Trends model for equitable wealth
                                      creation and distribution, targeting a $50-$60 trillion economy and 20-30 nations reaching $1 trillion each within only one decade. 
                                      </p>
                                      <p class="font-medium pb-5 text-lg">Inspired by his success in China, Kamalabadi's strategy includes consensus-building, as well as project aggregation. </p>
                                      <p class="font-medium pb-5 text-lg">Renowned for facilitating over $35 billion in historic transactions, he promotes self-regenerative economies issuing outbound debt, 
                                        aiming for a prosperous Africa with global impact, supported by all African and global leaders.
                                      </p>
                                      
                                      <div class="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
                                        <div class="flex justify-center">
                                          <button to="/" class=" w-60 btn btn-outline-primary" :class="$style.btn" style=" color: white; font-weight: 500;">
                                            LEARN MORE
                                          </button>
                                        </div>
                                        <div class="flex justify-center">
                                          <button to="/" class=" btn-outline-primary w-60" style="font-weight: 500; background-color: #CFB16D; color:white" >
                                            EXPERIENCE <ThreeSixtyIcon style="width: 20px; float: right; margin-top: 6px;"/>
                                          </button>
                                        </div>
                                      </div>
                                  </div>
                                  <div></div>
                                </div>
                                 
                                      <!--NuxtLink :class="$style.btnLink" to="/">
                                      <returnIcon />
                                      <span style="color: white; line-height: 1">Click to rotate view</span>
                                      </NuxtLink-->
                              </div>
                              <div class="flex justify-center">
                                  <div class="card" style="width: 22rem; background-color: #15172E;">
                                      <img class="card-img-top" :src="cardImage" alt="Card image cap" style="width: 100%;">
                                      <div class="card-body"  style="padding: 30px; padding-top: 25px !important;" >
                                          <h5 class="card-title font-medium text-lg" style="text-align: center; color:white">The Future is Now!</h5>
                                          <hr class="mt-5" style="border: white 2px solid ; margin-left: 35%; margin-right: 35%; color:white; opacity: 1" />
                                          <p class="card-text pt-5 pb-5" style="color: #9C9C9C; text-align: center " >The Future Trends Multiverse & EXPO is created to be a catalyst for Humanitys’ destined Future</p>
                                          <div class='flex justify-center'>
                                            <button class="btn btn-outline-primary" style="color:#ffffff !important; font-weight: 500;">Explore<ThreeSixtyIcon style="width: 20px; float: right; margin-top: 6px; margin-left: 8px;"/></button>
                                          </div>
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
      <AppWrapper>     
        <div class="flex justify-center mb-10 pr-6 pl-6  lg:mt-10" >
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
     </AppWrapper>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import returnIcon from '~/icons/returnIcon.vue';
  import { Navigation, Pagination } from 'swiper';
  import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
  import ThreeSixtyIcon from '~/icons/ThreeSixtyIcon.vue';
  import cardImage from '~/assets/images/slider/card_slider.png';
  import sliderImage1 from '~/assets/images/slider/slider_1.png';
  import sliderImage2 from '~/assets/images/slider/slider_2.png';
  import sliderImage3 from '~/assets/images/slider/slider_3.png';
  import sliderImage4 from '~/assets/images/slider/slider_6.png';
  import sliderImage5 from '~/assets/images/slider/slider_7.png';
  import sliderImage6 from '~/assets/images/slider/slider_8.png';
  import sliderImage7 from '~/assets/images/slider/slider_9.png';
  import sliderImageBackground from '~/assets/images/slider/slider_background.png';
  import { Carousel, CarouselNext, CarouselContent, CarouselItem, CarouselPrevious } from '@/components/ui/carousel';
  
  
  const items = [
     sliderImage1,
     sliderImage2,
     sliderImage3,
     sliderImage4,
     sliderImage5,
     sliderImage6,
     sliderImage7
  ];
  </script>
  

  <style lang="scss" module>
  .mySwiper {
    width: 100%;
    height: 239px;
  }
.btn{
  padding-left: 10px !important;
  padding-right: 10px !important;
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
  