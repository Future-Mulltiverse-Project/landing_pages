<template>
  <section :class="$style.section" class="pt-12">
    <AppWrapper>
      <div class="row mb-12" :class="$style.item">
        <MainSectionHeader
          :title="`<strong class='font-semibold text-5xl'>THE <span style='color:white'>MOVEMENT</span></strong>`"            
        />
        <div class=" grid-cols-1 gap-3 md:grid-cols-2 grid items-center"> 
          <div class="md:order-first">
            <MainSectionHeader
              :title="`Our <span style='color:white'>Vision</span> is clear`"
              :class="$style.header"
              class="font-medium text-5xl"
            />
            <MainSectionTextContent>
              <p class="text-lg mr-10 pt-4">
                We are convinced that despite all the challenges the world is currently facing,
                we are also living in the most exciting time to be alive that holds unprecedented
                change and transformational potential for our world, the whole economy, and each 
                individual, if the already existing solutions and available opportunities are made 
                accessible & inspired to be used purposefully & wisely.
              </p>
            </MainSectionTextContent>
          </div>
          <div class="pr-5 md:pr-0">
            <iframe style="width: 100%;" height="319" src="https://www.youtube.com/embed/ttm0a_P1sGc"></iframe>
          </div>
        </div>
      </div>

      <QuestTopSlider style="margin-bottom: 50px;" />
      <div class=" grid-cols-1 gap-3 mt-8 md:grid-cols-2 grid items-center">
        <div class="md:order-first">
          <iframe style="width: 100%;" height="319" src="https://www.youtube.com/embed/o_LwGcSnxBg"></iframe>
        </div>
        <div class="p-4">
          <h2 class="mb-4 font-medium text-5xl" style="color: #CFB16D">OUR <span style='color:white'>MISSION</span> IS SIMPLE</h2>
          <MainSectionTextContent>
            <p class="text-lg">
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
  background: radial-gradient(1160px 420px at center, #23274a, transparent);
}

.item {
  @include rfs(80px, --gutter-x);
  @include rfs(64px, --gutter-y);
  //@include margin-bottom(58px);
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

</style>
