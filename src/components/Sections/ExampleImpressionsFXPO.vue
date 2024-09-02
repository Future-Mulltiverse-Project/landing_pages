<template>
  <section :class="$style.section">
          <div class="row" :class="$style.row">
            <p style="text-align: center; font-size: 25px"><span style="color: #CFB16D">Some of our</span> Business <span style="color: #CFB16D">&</span> Technologies Partners<span style="color: #CFB16D">:</span></p>
          </div>
          <div class="row">
            <div class="col-md-12">
                <MediaPicture
                :class="$style.video"
                style="width: auto !important; margin-bottom: 16px !important"
                :src="Video"
                :width="1260"
                :height="300"
                />
                <br />
            </div>
          </div>
    <div class="row">
      <h1 style="text-align: left; margin-bottom: 50px; font-size: 30px;"><span style="color: #CFB16D;">Example Impressions</span></h1>
      <div class="row" style="padding-right: 0px !important;">
        <div class="col-md-6">
            <div class="card">
            <img
                src="@/assets/images/impressions/big_image.png"
                alt="FUTURE Image"
                class="custom-image"
                style=" width: 100% !important;"
            />
            </div>
        </div>
        <div class="col-md-6" style='padding-right: 2px !important;'>
            <div class="row" style="padding-right: 2px !important;">
                <div class="col-md-6" style="padding-right: 0px !important;">
                        <img
                            src="@/assets/images/impressions/small_image_1.png"
                            alt="FUTURE Image"
                            class="custom-image"
                            :class="$style['custom-image']"
                        />
                </div>
                <div class="col-md-6" style="padding-right: 0px !important;">
                    <div class="card">
                        <img
                            src="@/assets/images/impressions/small_image_2.png"
                            alt="FUTURE Image"
                            class="custom-image"
                            :class="$style['custom-image']"
                        />
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top: 20px;padding-right: 0px !important;">
                <div class="col-md-6" style="padding-right: 0px !important;">
                    <div class="card">
                        <img
                            src="@/assets/images/impressions/small_image_3.png"
                            alt="FUTURE Image"
                            class="custom-image"
                            style="padding-right: 0px !important;"
                            :class="$style['custom-image']"
                        />
                    </div>
                </div>
                <div class="col-md-6"  style="padding-right: 0px !important;">
                    <div class="card">
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
  <AppWrapper style=" margin-top: 40px;">
          <swiper
            :modules="[Navigation, Pagination]"
            :spaceBetween="0"
            :slidesPerView="4"
            navigation
            :pagination="{ clickable: true }"
            class="mySwiper"
            style="background-color: #0A0D1D;"
          >
          <swiper-slide v-for="(item, index) in items" :key="index" style="width: unset !important ; min-width: 120px !important; max-width: 300px !important;  min-height: 170px !important; max-height: 300px !important; ">
              <img :src="item" style="height: 230px !important; width: 100% !important;" draggable="true" />
            </swiper-slide>
          </swiper>

          <br/>          
     </AppWrapper>
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

.col-md-6{
    
}
.row{
    padding-right: 0px !important;
}
</style>



<style lang="scss" module>

h4 {
    text-align: left;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 20px;
}
.section {
  padding-top: 40px;
  text-align: center;
  position: relative;
  max-width: 1168px;
  margin: 0 auto;
}

@media (max-width: 1800px)
{
    /*.section{
      margin-left: 10px !important;
    }*/
}

.primaryText {
  color: $primary; /* Replace $primary with your desired primary text color */
}

.custom-image {
  width: 87% !important;
}

.heading {
  @include font-size(28px);
  @include margin-bottom(28px);
  color: #ffffff;
  font-weight: 600;
  line-height: divide(30, 28);
}

.title {
  @include font-size(45px);
  @include margin-bottom(64px);
  line-height: divide(55, 45);
  margin-left: auto;
  margin-right: auto;
  max-width: 26ch;
  text-transform: uppercase;
  margin-bottom: 00px;
}
</style>
