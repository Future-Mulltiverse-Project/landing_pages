<template>
    <section :class="$style.section">
      <AppWrapper>
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <div class="card">
                <div class="card-body">
                    <h1 class="card-title">Privacy Policy</h1>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
      </AppWrapper>
    </section>
  </template>
  
  <script lang="ts" setup>
  import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
  import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
  </script>
  
  <style lang="scss" module>
  .section {
    @include padding(140px 0 12px);
    text-align: center;
  }
  
  .header {
    @include margin-bottom(40px);
  }
  
  .btn {
    min-width: rem-calc(200px);
    max-width: 100%;
  }
  
  .text1 {
    @include font-size(22px);
    @include margin-top(80px);
    @include margin-bottom(24px);
    line-height: divide(30, 22);
    font-weight: 400;
  }
  
  .text2 {
    @include font-size(45px);
    @include margin-bottom(16px);
    line-height: divide(55, 45);
    text-transform: uppercase;
  
    strong {
      color: $primary;
    }
  }
  .text3 {
    @include font-size(22px);
    color: $primary;
    line-height: divide(30, 22);
    margin: 0 auto;
    max-width: rem-calc(380px);
  }
  </style>
  