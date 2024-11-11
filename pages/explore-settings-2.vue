<template>
  <ExploreLayout>
    <div :class="$style.body">
      <AppWrapper>

        <div :class="$style.logo">
          <MediaPicture :src="Logo" :width="284" :height="284" />
        </div>
        <div :class="$style.text1">
          <p class="font-medium">
            <span>Enter </span><strong>& </strong><span>Experience </span>The
            <br /><span>FUTURE</span><strong> GUIDE</strong>
          </p>
        </div>
        <div :class="$style.text2">
          <h4 style='text-align: center'>Experience the future today:</h4>
        </div>
        <div class="grid grid-cols-4 gap-5">
          <div></div>
          <div >
            <button
              class="btn btn-outline-primary"
              :class="$style.btn77"
            >
                ENTER FUTURE
                <br />
                MULTIVERSE
              <HeadCommentIcon style="float:right" />
            </button>
          </div>
          <div >
            <button
              class="btn btn-outline-primary"
            >
              ONBOARD
            </button>
          </div>
          <div></div>
        </div>

        <div :class="$style.text3">
          Please Onboard & Connect your Wallet
          <br />
          to Enter the Future Multiverse
        </div>
    </AppWrapper>
    </div>
  </ExploreLayout>
</template>

<script lang="ts" setup>
import ExploreLayout from '~/components/Layouts/ExploreLayout.vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import ExploreSettings from '~/components/Explore/ExploreSettings.vue';
import ExploreChooseServer from '~/components/Explore/ExploreChooseServer.vue';
import DegreeIcon from '~/icons/DegreeIcon.vue';

import Bg from 'assets/images/future-multiverse/multiversebg.png';
</script>

<style lang="scss" module>
.footer {
  --gutter-y: #{rem-calc(16px)};
  padding-top: 38px;
  align-items: center;
  justify-content: space-between;
}

.btnCol {
  flex: 0 1 rem-calc(230px);
}

.btn {
  width: 100%;
  svg {
    margin-left: rem-calc(10px);
    height: rem-calc(14px);
    width: rem-calc(22px);
  }
}

.check {
  :global(.form-check-input):checked {
    --form-check-bg-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><rect x='5' y='5' width='10' height='10' fill='%23CFB16D' stroke-width='0'/></svg>");
  }

  :global(.form-check-label) {
    color: #fff;
  }
}
.body {
  padding: 80px  0 120px;
  align-items: center;
  display: flex;
  flex-grow: 1;
  position: relative;
}
</style>
