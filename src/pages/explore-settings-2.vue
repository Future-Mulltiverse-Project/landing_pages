<template>
  <ExploreLayout>
    <AppWrapper>
      <ExploreSettings>
        <ExploreChooseServer />
        <div>
          <div class="row" :class="$style.footer">
            <div class="col-auto">
              <div class="form-check" :class="$style.check">
                <input
                  id="flexCheckDefault"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                />
                <label class="form-check-label" for="flexCheckDefault">
                  I agree with FXPO terms & services
                </label>
              </div>
            </div>
            <div class="col-auto" :class="$style.btnCol">
              <button
                class="btn btn-outline-white"
                :class="$style.btn"
                type="button"
              >
                ENTER FXPO
                <DegreeIcon />
              </button>
            </div>
          </div>
        </div>
      </ExploreSettings>
    </AppWrapper>
  </ExploreLayout>
</template>

<script lang="ts" setup>
import ExploreLayout from '~/components/Layouts/ExploreLayout.vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import ExploreSettings from '~/components/Explore/ExploreSettings.vue';
import ExploreChooseServer from '~/components/Explore/ExploreChooseServer.vue';
import DegreeIcon from '~/icons/DegreeIcon.vue';
</script>

<style lang="scss" module>
.footer {
  --gutter-y: #{rem-calc(16px)};
  @include padding-top(38px);
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
</style>
