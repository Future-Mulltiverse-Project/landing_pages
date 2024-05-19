<template>
  <DefaultLayout>
    <HomeIntroVideoSection />
    <AboutFxpoSection />
    <LaunchingSection />
    
    <HomeVideoSection />
    <AcceleratorSection />
    <!--UseCasesSection /-->
    <PlatformFeaturesSection />

    <div style=" background: url('_nuxt/assets/images/rocket_large.png'), #0A0D1D; background-repeat: no-repeat; background-size: cover;max-width: 100%;">
    <PrelaunchSection />
    <ProductsSection />
    </div>
    <GuideBookSection />
    <JoinSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>

import Bg from '~/assets/images/prelaunch-bg.png';
import MediaPicture from '~/components/Media/MediaPicture.vue';

import AboutFxpoSection from '~/components/Sections/AboutFxpoSection.vue';
/*import AcademySection from '~/components/Sections/AcademySection.vue';*/
import AcceleratorSection from '~/components/Sections/AcceleratorSection.vue';
import HomeIntroVideoSection from '~/components/Sections/HomeIntroVideoSection.vue';
/*import UseCasesSection from '~/components/Sections/UseCasesSection.vue';*/
import HomeVideoSection from '~/components/Sections/HomeVideoSection.vue';
import PlatformFeaturesSection from '~/components/Sections/PlatformFeaturesSection.vue';
import LaunchingSection from '~/components/Sections/LandingLaunchingSection.vue';
/*import PreviewVideoSection from '~/components/Sections/PreviewVideoSection.vue';*/
import JoinSection from '~/components/Join/JoinSection.vue';
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import ProductsSection from '~/components/Products/LandingProductsSection.vue';
import GuideBookSection from '~/components/Sections/GuideBookSection.vue';
import PrelaunchSection from '~/components/Sections/LandingPrelaunchSection.vue';
</script>
