<template>
        <br/>
        <br/>
        <br/>
        <h2 style="color: #CFB16D;">Historic:</h2>
        <br/>
        <div class="row"  style="background-color: #0A0D1D;">
            <div class="col-md-12">
                <img class="img-responsive" :src="image_1" style="width: 100%;"/>
                <br/>
                <br/>
            </div>
            <div class="col-md-12">
                <img class="img-responsive" :src="image_2" style="width: 100%;"/>
                <br/>
                <br/>
            </div>
            <div class="col-md-12">
                <img class="img-responsive" :src="image_3" style="width: 100%;"/>
                <br/>
                <br/>
            </div>
            <div class="col-md-12">
                <img class="img-responsive" :src="image_4" style="width: 100%;"/>
                <br/>
                <br/>
            </div>
        </div>
        <h2 style="color: #CFB16D;">Recent:</h2>
        <br/>
        <div class="row"  style="background-color: #0A0D1D;">
            <div class="col-md-12">
                <img class="img-responsive" :src="image_5" style="width: 100%;"/>
                <br/>
                <br/>
            </div>
            <div class="col-md-12">
                <img class="img-responsive" :src="image_6" style="width: 100%;"/>
                <br/>
                <br/>
            </div>
            <div class="col-md-12">
                <img class="img-responsive" :src="image_7" style="width: 100%;"/>
                <br/>
                <br/>
            </div>
            <div class="col-md-12">
                <img class="img-responsive" :src="image_8" style="width: 100%;"/>
                <br/>
                <br/>
            </div>
            <div class="col-md-12">
                <img class="img-responsive" :src="image_9" style="width: 100%;"/>
                <br/>
                <br/>
            </div>
            <div class="col-md-12">
                <img class="img-responsive" :src="image_10" style="width: 100%;"/>
                <br/>
                <br/>
            </div>
            <div class="col-md-12">
                <img class="img-responsive" :src="image_11" style="width: 100%;"/>
                <br/>
                <br/>
            </div>

            <div class="col-md-12">
                <img class="img-responsive" :src="image_12" style="width: 100%;"/>
                <br/>
                <br/>
            </div>
            <div class="col-md-12">
                <img class="img-responsive" :src="image_13" style="width: 100%;"/>
                <br/>
                <br/>
            </div>
        </div>
        
  </template>
  
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import returnIcon from '~/icons/returnIcon.vue';
  import { Navigation, Pagination } from 'swiper';
  import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';

  import image_1 from '~/assets/images/gallery/row_1.png';
  import image_2 from '~/assets/images/gallery/row_2.png';
  import image_3 from '~/assets/images/gallery/row_3.png';
  import image_4 from '~/assets/images/gallery/row_4.png';
  import image_5 from '~/assets/images/gallery/row_5.png';
  import image_6 from '~/assets/images/gallery/row_6.png';
  import image_7 from '~/assets/images/gallery/row_7.png';
  import image_8 from '~/assets/images/gallery/row_8.png';
  import image_9 from '~/assets/images/gallery/row_9.png';
  import image_10 from '~/assets/images/gallery/row_10.png';
  import image_11 from '~/assets/images/gallery/row_11.png';
  import image_12 from '~/assets/images/gallery/row_12.png';
  import image_13 from '~/assets/images/gallery/row_13.png';
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
  