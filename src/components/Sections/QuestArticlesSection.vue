<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.item">
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <MainSectionHeader
            :title="`<strong>Our Vision is clear</strong>`"
            :class="$style.header"
          />
          <MainSectionTextContent>
            <p>
              We are convinced that despite all the challenges the world is
              currently facing, we are also living in the most exciting time to
              be alive that holds unprecedented change and transformational
              potential for our world, the whole economy, and each individual,
              if the existing solutions and available opportunities are made
              accessible and are acknowledged and used consciously.
            </p>
          </MainSectionTextContent>
        </div>
        <div class="col-12 col-lg-6">
          <MediaPicture :src="VisionImg" :width="539" :height="319" />
        </div>
      </div>
      <div class="row" :class="$style.item">
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <MainSectionHeader
            :title="`<strong>our Mission is Simple</strong>`"
            :class="$style.header"
          />
          <MainSectionTextContent>
            <p>
              We designed and built the FXPO to demonstrate how, in a world
              where challenges and opportunities coexist, the latest advances in
              technology can be used in ways never seen before in a meaningful
              and forward-thinking way to accelerate a more sustainable,
              inspiring and meaningful future for all, and at the same time to
              open up the possibility for everyone to gain access to these new
              opportunities and to make them usable in essence to create more
              value for every individual, every project and every company that
              resonates with this purpose.
            </p>
          </MainSectionTextContent>
        </div>
        <div class="col-12 col-lg-6">
          <MediaPicture :src="MissionImg" :width="539" :height="319" />
        </div>
      </div>
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
</script>

<style lang="scss" module>
.section {
  @include padding(70px 0 126px);
  background: radial-gradient(1160px 420px at bottom, #23274a, transparent);
}

.item {
  @include rfs(80px, --gutter-x);
  @include rfs(64px, --gutter-y);
  @include margin-bottom(98px);
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
  @include margin-bottom(26px);
}
</style>
