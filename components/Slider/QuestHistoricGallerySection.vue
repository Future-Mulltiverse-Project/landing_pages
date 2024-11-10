<template>
    <AppWrapper>
        <h2 style="color: #CFB16D;">Historic:</h2>
        <div class="row"  style="background-color: #0A0D1D;">
            <div class="row">
                <!-- line 1-->
                <div class="col-md-1"><img class="img-responsive" :src="image_1" style="width: 100px;"></div>
                <div class="col-md-1"><img class="img-responsive" :src="image_2" style="width: 100%;" /></div>
                <div class="col-md-1"><img :src="image_3" style="width: 100%;"/></div>
                <div class="col-md-4"><img :src="image_4" style="width: 100%;"/></div>
                <div class="col-md-1"><img :src="image_5" style="width: 100%;" /></div>
                <div class="col-md-4"><img :src="image_6" style="width: 100%;" /></div>
            </div>
            <!-- end line 1-->
            <!-- line 2-->
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <!-- end line 2-->
            <!-- line 3-->
            <div class="col-md-1"></div>
            <div class="col-md-1"></div>
            <div class="col-md-1"></div>
            <div class="col-md-1"></div>
            <div class="col-md-3"></div>
            <div class="col-md-4"></div>
            <div class="col-md-1"></div>
            <!-- end line 3-->
            
            <!-- line 3-->
            <div class="col-md-1"></div>
            <div class="col-md-2"></div>
            <div class="col-md-2"></div>
            <div class="col-md-2"></div>
            <div class="col-md-1"></div>
            <div class="col-md-2"></div>
            <div class="col-md-2"></div>
            <!-- end line 3-->
            <MediaPicture :src="Bg" :width="1400" :height="428" layout="fill" />
        </div>
        <h2 style="color: #CFB16D;">Recent:</h2>
        <div class="row"  style="background-color: #0A0D1D;">
            <div class="row">
                <!-- line 1-->
                <div class="col-md-4"><img :src="image_1" :height="350" :width="290" /></div>
                <div class="col-md-4"><img :src="image_2"  :height="300" :width="290" /></div>
                <div class="col-md-2"><img :src="image_3"  :height="300" :width="290" /></div>
                <div class="col-md-2"><img :src="image_4"   :height="300" :width="290"  /></div>
                <!-- end line 1-->
            </div>
            <!-- line 2-->
            <div class="col-md-4"></div>
            <div class="col-md-3"></div>
            <div class="col-md-4"></div>
            <div class="col-md-2"></div>
            <!-- end line 2-->
            <!-- line 3-->
            <div class="col-md-2"></div>
            <div class="col-md-2"></div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <!-- end line 3-->
            
            <!-- line 3-->
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <!-- end line 3-->

            <!-- line 3-->
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <div class="col-md-1"></div>
            <div class="col-md-3"></div>
            <!-- end line 3-->

            <!-- line 3-->
            <div class="col-md-4"></div>
            <div class="col-md-1"></div>
            <div class="col-md-4"></div>
            <div class="col-md-3"></div>
            <!-- end line 3-->

            
            <!-- line 3-->
            <div class="col-md-4"></div>
            <div class="col-md-3"></div>
            <div class="col-md-2"></div>
            <div class="col-md-3"></div>
            <!-- end line 3-->

            
            <!-- line 3-->
            <div class="col-md-3"></div>
            <div class="col-md-4"></div>
            <div class="col-md-3"></div>
            <div class="col-md-2"></div>
            <!-- end line 3-->

        </div>
        

    </AppWrapper>
  </template>
  
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import returnIcon from '~/icons/returnIcon.vue';
  import { Navigation, Pagination } from 'swiper';
  import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';

  import image_1 from '~/assets/images/gallery/1.png';
  import image_2 from '~/assets/images/gallery/2.png';
  import image_3 from '~/assets/images/gallery/3.png';
  import image_4 from '~/assets/images/gallery/4.png';
  import image_5 from '~/assets/images/gallery/5.png';
  import image_6 from '~/assets/images/gallery/6.png';
  import image_7 from '~/assets/images/gallery/7.png';
  import image_8 from '~/assets/images/gallery/8.png';
  import image_9 from '~/assets/images/gallery/9.png';
  import image_10 from '~/assets/images/gallery/10.png';
  import image_11 from '~/assets/images/gallery/11.png';
  import image_12 from '~/assets/images/gallery/12.png';
  import image_13 from '~/assets/images/gallery/13.png';
  import image_14 from '~/assets/images/gallery/14.png';
  import MediaPicture from '~/components/Media/MediaPicture.vue';
  
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
  