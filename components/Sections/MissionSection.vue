<template>
  <section :class="$style.section">
    <AppWrapper>
      <div class="row" :class="$style.row">
        <div class="col-12 col-lg-6" :class="$style.leftCol">
          <MainSectionHeader
            :title="`<strong>The Vision & Mission</strong> of the FXPO:`"
            :class="$style.header"
          >
            <p>
              <strong>
                Let's build the future together! It's in our hands.
              </strong>
            </p>
          </MainSectionHeader>
        </div>
        <div class="col-12 col-lg-6" :class="$style.rightCol">
          <MainSectionTextContent>
            <p>
              At FXPO, we are driven by a passion to create the breakthrough to
              a new world, where businesses thrive and people flourish. Our
              decentralized platform is not just about innovation,
              sustainability and cutting-edge technology, but is also a catalyst
              for change, creating a future that is compelling, meaningful and
              inspiring for everyone. We can create a world where everyone has
              the opportunity to grow, progress and succeed through creating
              more value for others. We invite you to join us on this epic
              journey and co-create a future with us, where possibilities and
              opportunities are limitless. Together, we hold the power to shape
              the world of tomorrow, and to leave a lasting legacy for
              generations to come.
            </p>
            <p>
              Our mission is to create breakthroughs making outstanding and
              groundbreaking technologies accessible to the market by leveraging
              cutting-edge solutions. We are dedicated to building a platform
              that empowers businesses, projects, and individuals to thrive by
              providing them with the tools they need to create more value for
              others and make a positive impact on the world.
            </p>
            <p>
              Through our work, we aim to accelerate the transition to a more
              sustainable, meaningful, and prosperous future for all by making
              innovative technologies and solutions more accessible and usable
              for everyone.
            </p>
          </MainSectionTextContent>
        </div>
      </div>
    </AppWrapper>
  </section>
</template>

<script lang="ts" setup>
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
</script>

<style lang="scss" module>
.section {
  padding: 45px  0 0;
  text-align: center;

  @include media-breakpoint-up(lg) {
    text-align: left;
  }
}

.row {
  --gutter-x: 0;
}

.leftCol {
  @include media-breakpoint-up(lg) {
    padding-right: 30px;
  }
}

.rightCol {
  @include media-breakpoint-up(lg) {
    padding-left: 13px;
  }
}

.header {
  margin-bottom: 44px;

  h2 {
    @include media-breakpoint-up(lg) {
      max-width: rem-calc(370px);
    }
  }

  p {
    @include media-breakpoint-up(lg) {
      max-width: rem-calc(320px);
    }
  }

  p:first-child {
    margin-top: 22px;
  }
}
</style>
