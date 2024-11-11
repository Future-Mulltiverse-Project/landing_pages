<template>
    <AppWrapper>
    <section :class="$style.section">
        <div class="grid">
            <h1 class="font-medium" style="text-align: left; margin-bottom: 13px; font-size: 30px;">
            <span style="color: #CFB16D;">Examples </span>of
            <span style="color: #CFB16D;">Use-Cases, Industries</span> &
            <span style="color: #CFB16D;">Applications</span>:
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div v-for="item in useCases" :key="item.title">
                <div class="card">
                <h4>{{ item.title }}</h4>
                <img
                    :src="item.imageSrc"
                    alt="FUTURE Image"
                    class="custom-image"
                    :class="$style['custom-image']"
                />
                </div>
            </div>
            </div>
        </div>
    </section>
        </AppWrapper>
  </template>
  
  <script>
  export default {
    data() {
      return {
        useCases: [
          { title: 'Galaxies & Planets', imageSrc: '_nuxt/assets/images/use_cases/galaxy.png'},
          { title: 'Smart Nations & Cities', imageSrc: '_nuxt/assets/images/use_cases/smart_nations.png'},
          { title: 'Mega-Projects', imageSrc: '_nuxt/assets/images/use_cases/mega_projects_2.png'},
          { title: 'Custom Environments', imageSrc: '_nuxt/assets/images/use_cases/custom_environment_2.png'},
          { title: 'Real Estate', imageSrc: '_nuxt/assets/images/use_cases/real-estate.png'},
          { title: 'Art', imageSrc: '_nuxt/assets/images/use_cases/art.png'},
          { title: 'Exhibitions', imageSrc: '_nuxt/assets/images/use_cases/exhibitions.png'},
          { title: 'Events', imageSrc: '_nuxt/assets/images/use_cases/events.png'},
          { title: 'Energy', imageSrc: '_nuxt/assets/images/use_cases/energy.png'},
          { title: 'Industry', imageSrc: '_nuxt/assets/images/use_cases/industry.png'},
          { title: 'Mobility', imageSrc: '_nuxt/assets/images/use_cases/mobility.png'},
          { title: '(Space) Ports', imageSrc: '_nuxt/assets/images/use_cases/ports.png'},
          { title: 'Agriculture', imageSrc: '_nuxt/assets/images/use_cases/agriculture.png'},
          { title: 'Mining', imageSrc: '_nuxt/assets/images/use_cases/mining.png'},
          { title: 'Education', imageSrc: '_nuxt/assets/images/use_cases/education.png'},
          { title: 'Tourism', imageSrc: '_nuxt/assets/images/use_cases/tourism.png'},
          { title: 'Finance', imageSrc: '_nuxt/assets/images/use_cases/finance.png'},
          { title: 'Fashion', imageSrc: '_nuxt/assets/images/use_cases/fashion.png'},
          { title: 'Gaming', imageSrc: '_nuxt/assets/images/use_cases/gaming.png'},
          { title: 'Entertainment', imageSrc: '_nuxt/assets/images/use_cases/entertainment.png'},
        ],
      };
    },
  };
  
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
  </script>
  
  <style lang="scss" module>
  h4 {
    text-align: left;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
  }
  
  .section {
    text-align: center;
    position: relative;
    max-width: 1168px;
    padding-bottom: 50px;
  }
  
  
  .primaryText {
    color: $primary; /* Replace $primary with your desired primary text color */
  }
  
  .custom-image {
    width: 100%;
    height: auto; // Maintain aspect ratio
  }
  
  .heading {
    font-size: 28px;
    margin-bottom: 28px;
    color: #ffffff;
    font-weight: 600;
    line-height: divide(30, 28);
  }
  
  .title {
    font-size: 45px;
    margin-bottom: 64px;
    line-height: divide(55, 45);
    margin-left: auto;
    margin-right: auto;
    max-width: 26ch;
    text-transform: uppercase;
    margin-bottom: 00px;
  }
  
  </style>