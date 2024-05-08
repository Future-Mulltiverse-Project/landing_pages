<template>
  <DefaultLayout>
    <HomeIntroVideoSection />
    <LaunchingSection />
    <AboutFxpoSection />
    
    <!--HomeVideoSection /-->
    <AcceleratorSection />
    <UseCasesSection />
    <ProductsSection />
    <PrelaunchSection />
    
    <GuideBookSection />
    <JoinSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import AboutFxpoSection from '~/components/Sections/AboutFxpoSection.vue';
/*import AcademySection from '~/components/Sections/AcademySection.vue';*/
import AcceleratorSection from '~/components/Sections/AcceleratorSection.vue';
import HomeIntroVideoSection from '~/components/Sections/HomeIntroVideoSection.vue';
import UseCasesSection from '~/components/Sections/UseCasesSection.vue';
/*import HomeVideoSection from '~/components/Sections/HomeVideoSection.vue';*/
import LaunchingSection from '~/components/Sections/LaunchingSection.vue';
/*import PreviewVideoSection from '~/components/Sections/PreviewVideoSection.vue';*/
import JoinSection from '~/components/Join/JoinSection.vue';
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import ProductsSection from '~/components/Products/ProductsSection.vue';
import GuideBookSection from '~/components/Sections/GuideBookSection.vue';
import PrelaunchSection from '~/components/Sections/PrelaunchSection.vue';
</script>
