<template>
  <section :class="$style.section">
    <MediaPicture :src="Bg" :width="1440" :height="690" layout="fill" />
    <AppWrapper :class="$style.wrapper">
      <div :class="$style.heading"><span style='color:#CFB16D'>Future Multiverse</span> Quest</div>
      <h2 :class="$style.title">
         <span :class="$style.gold">TO </span>CATALYZE <br /><span :class="$style.gold">THE </span> DESTINY <br/>
          <span :class="$style.gold"> of </span>THE FUTURE
      </h2>
      <MainSectionTextContent :class="$style.text" style="max-width: 50rem;">
        <p>
          <span :class="$style.gold">"</span>The day science / humanity begins to study non-physical phenomena, it will make more 
          progress in one decade than in all the previous centuries of its existence.<span :class="$style.gold">",
          <br />
          Nikola Tesla</span>
        </p>
      </MainSectionTextContent>
      <button style="padding-left:60px; padding-right: 60px;" class="btn btn-outline-primary  font-semibold " >
        Start now
      </button>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import Bg from 'assets/images/quest-intro-bg.jpg';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
</script>

<style lang="scss" module>
.section {
  /*min-height: 100vh;*/
  padding-top: rem-calc(10px);
  display: flex;
  align-items: center;
  position: relative;
  text-align: center;
}

.gold{
  color: #CFB16D;
}

.wrapper {
  @include padding(80px 0);
  padding-bottom: 50px !important;
}

.header {
  @include margin-bottom(40px);
  margin-left: auto;
  margin-right: auto;
  max-width: rem-calc(740px);

  p:first-child {
    @include margin-top(28px);
  }
}

.heading {
  @include font-size(32px);
  @include margin-bottom(15px);
  line-height: divide(30, 28);
  font-weight: 600;
}

.title {
  @include font-size(60px);
  @include margin-bottom(25px);
  line-height: divide(70, 50);
  margin-left: auto;
  margin-right: auto;
  max-width: rem-calc(720px);
  text-transform: uppercase;
  color: white;
  font-weight: 600;

  > * {
    color: $primary;
  }
}

.text {
  margin: 0 auto rem-calc(40px);
  max-width: rem-calc(600px);
  text-align: center;

  p {
    line-height: divide(30, 16);
  }
}

</style>
