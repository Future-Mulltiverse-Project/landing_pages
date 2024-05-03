<template>
  <DefaultLayout title="Packages">
    <MainSection angle-bottom has-bg-behind>
      <AppWrapper :class="$style.topWrapper">
        <SectionHeader :class="$style.header">
          <template #title>
            FutureX EXPO
            <br />
            <span>Licences & Packages</span>
          </template>
          <TextContent :class="$style.text">
            9 Different Packages and 3 diff license types, to fit all your needs
          </TextContent>
        </SectionHeader>
      </AppWrapper>
    </MainSection>
    <MainSection
      angle-right-y-both
      has-gradient
      has-bg-behind
      :class="$style.section"
    >
      <AppWrapper :class="$style.wrapper">
        <div :class="$style.filter">
          <div class="row" :class="$style.filterRow">
            <div :class="$style.filterLeftCol" class="col">
              <div :class="$style.filterTitle">
                Find best suited for you license
              </div>
            </div>
            <div class="col-auto" :class="$style.filterRightCol">
              <div class="row" :class="$style.selectRow">
                <div
                  class="col-12 col-sm-4 col-md-auto"
                  :class="$style.selectCol"
                >
                  <select id="" name="" class="form-select">
                    <option value="" disabled selected>No of Avatars</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <div
                  class="col-12 col-sm-4 col-md-auto"
                  :class="$style.selectCol"
                >
                  <select id="" name="" class="form-select">
                    <option value="" disabled selected>Business Space</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <div
                  class="col-12 col-sm-4 col-md-auto"
                  :class="$style.selectCol"
                >
                  <select id="" name="" class="form-select">
                    <option value="" disabled selected>License Type</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </div>
                <div class="col-12 col-sm-4 col-md-auto" :class="$style.btnCol">
                  <button class="btn btn-sm btn-outline-primary" type="button">
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" :class="$style.row">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="col-12 col-md-6 col-lg-4"
          >
            <PackageListItem :item="item" :index="index" />
          </div>
        </div>
        <PackagesVisitorPass />
      </AppWrapper>
    </MainSection>
    <LicensesSection />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import DefaultLayout from '~/components/Layouts/DefaultLayout.vue';
import LicensesSection from '~/components/Licenses/LicensesSection.vue';
import PackageListItem from '~/components/Packages/PackageListItem.vue';
import PackagesVisitorPass from '~/components/Packages/PackagesVisitorPass.vue';
import MainSection from '~/components/Section/MainSection.vue';
import SectionHeader from '~/components/utilities/SectionHeader.vue';
import TextContent from '~/components/utilities/TextContent.vue';

const items = ref([
  {
    name: 'Explorer Package',
    avatar: '1',
    space: '1000',
    staking_license: true,
    retail_license: true,
    corporate_license: true,
    price: 9.99,
  },
  {
    name: 'Adventurer Package',
    avatar: '1',
    space: '5000',
    staking_license: true,
    retail_license: true,
    corporate_license: true,
    price: 29.99,
  },
  {
    name: 'Pioneer Package',
    avatar: '1',
    space: '10.000',
    staking_license: true,
    retail_license: true,
    corporate_license: true,
    price: 59.99,
  },
  {
    name: 'Builder S Package',
    avatar: '5',
    space: '25.000',
    staking_license: true,
    retail_license: true,
    corporate_license: true,
    price: 354,
  },
  {
    name: 'Builder M Package',
    avatar: '10',
    space: '50.000',
    staking_license: true,
    retail_license: true,
    corporate_license: true,
    price: 354,
  },
  {
    name: 'Builder L Package',
    avatar: '20',
    space: '100.000',
    staking_license: true,
    retail_license: true,
    corporate_license: true,
    price: 354,
  },
  {
    name: 'Builder XL Package',
    avatar: '50',
    space: '250.000',
    staking_license: true,
    retail_license: true,
    corporate_license: true,
    price: 354,
  },
  {
    name: 'Creator Package',
    avatar: '150',
    space: '500.000',
    staking_license: true,
    retail_license: true,
    corporate_license: true,
    price: 1900,
    sale_price: 1300,
  },
  {
    name: 'Ambassador Package',
    avatar: '300',
    space: '1 Million',
    staking_license: true,
    retail_license: true,
    corporate_license: true,
  },
]);
</script>

<style lang="scss" module>
@import 'assets/styles/vars.scss';

.section {
  --sectionGradient: linear-gradient(
    173deg,
    #212646 var(--angleHeight),
    transparent calc(#{var(--angleHeight)} * 3)
  );
}

.topWrapper {
  @include padding-top(192px);
}

.header {
  position: relative;
  text-align: center;
  z-index: 1;
  margin-bottom: calc(var(--angleHeight) / -2 - #{rem-calc(10px)});
}

.text {
  max-width: 35ch;
  margin: 0 auto;
}

.wrapper {
  padding: rem-calc(100px 0 64px);
}

.row {
  --gutter-x: #{rem-calc(26px)};
  --gutter-y: #{rem-calc(26px)};
}

.filter {
  margin-bottom: rem-calc(76px);
}

.filterRow {
  --gutter-y: #{rem-calc(34px)};
  align-items: center;
}

.filterLeftCol {
  flex-basis: 100%;

  @media (min-width: $wrapper-width) {
    flex-basis: 0;
  }
}

.filterRightCol {
  flex-basis: 100%;

  @media (min-width: $wrapper-width) {
    flex-basis: auto;
  }
}

.filterTitle {
  @include font-size(26px);
  font-weight: 600;
  line-height: math-div(30, 26);
}

.selectRow {
  --gutter-x: #{rem-calc(14px)};
  --gutter-y: #{rem-calc(14px)};

  justify-content: center;

  @include media-breakpoint-up(md) {
    justify-content: flex-start;
  }
}

.selectCol select {
  width: 100%;

  @include media-breakpoint-up(md) {
    width: rem-calc(180px);
  }
}

.btnCol :global(.btn) {
  width: 100%;

  @include media-breakpoint-up(md) {
    width: auto;
  }
}
</style>
