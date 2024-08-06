<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.item">
          <MainSectionHeader
            :title="`<strong>THE <span style='color:white'>MOVEMENT</span></strong>`"
            
          />
        <div class="col-12 col-lg-6" :class="$style.leftCol" style="margin-top: 0px !important;">
          <MainSectionHeader
            :title="`<strong>Our <span style='color:white'>Vision</span> is clear</strong>`"
            :class="$style.header"
          />
          <MainSectionTextContent>
            <p>
              We are convinced that despite all the challenges the world is currently facing,
               we are also living in the most exciting time to be alive that holds unprecedented
                change and transformational potential for our world, the whole economy, and each 
                individual, if the already existing solutions and available opportunities are made 
                accessible & inspired to be used purposefully & wisely.
            </p>
            
          </MainSectionTextContent>
        </div>
        
        <div class="col-12 col-lg-6">
          <iframe style="width: 100%;" height="319" src="https://www.youtube.com/embed/ttm0a_P1sGc"></iframe>
        </div>
      </div>

      <QuestTopSlider/>
      <br/>
      <br/>

      <div class="row" :class="$style.item">
        <div class="col-12 col-lg-6">
          <iframe style="width: 100%;" height="319" src="https://www.youtube.com/embed/o_LwGcSnxBg"></iframe>
        </div>
        
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <MainSectionHeader
            :title="`<strong>our <span style='color:white'>Mission</span> is Simple</strong>`"
            :class="$style.header"
          />
          <MainSectionTextContent>
            <p>
              We designed and built the Future Multiverse & EXPO to demonstrate how, 
              in a world where challenges and opportunities coexist, the latest advancements 
              in technology can be used in forward-thinking ways never seen before, to accelerate
               a more sustainable, meaningful & inspiring  future for all, and to open up the 
               possibility for everyone to gain access to these new opportunities, to create 
               value for every individual, every project and every company that resonates with this purpose.
            </p>
          </MainSectionTextContent>
        </div>
      </div>

      <QuestSecondSlider/>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import VisionImg from '~/assets/images/quest-vision.jpg';
import MissionImg from '~/assets/images/quest-mission.jpg';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import QuestTopSlider from '~/components/Slider/QuestTopSlider.vue';
import QuestSecondSlider from '~/components/Slider/QuestSecondSlider.vue';
</script>

<style lang="scss" module>
.section {
  @include padding(70px 0 50px);
  background: radial-gradient(1160px 420px at center, #23274a, transparent);
}

.item {
  @include rfs(80px, --gutter-x);
  @include rfs(64px, --gutter-y);
  @include margin-bottom(58px);
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
}

.leftCol {
  .item:nth-child(even) & {
    @include media-breakpoint-up(lg) {
      order: 9999;
    }
  }
}

.header {
  @include margin-bottom(6px);
}
</style>
