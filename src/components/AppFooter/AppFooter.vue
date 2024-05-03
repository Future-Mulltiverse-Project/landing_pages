<template>
  <footer :class="$style.footer">
    <AppWrapper :class="$style.wrapper">
      <div class="row" :class="$style.row">
        <div :class="$style.leftCol" class="col-12 col-lg-4">
          <AppFooterLogo :class="$style.logo" />
          <p :class="$style.contactText">
            Contact Us:
            <br />
            <a href="mailto:support@fxpo.io" target="_top">support@fxpo.io</a>
          </p>
          <AppFooterSocials :class="$style.socials" />
        </div>
        <div class="col-12 col-lg-8">
          <div class="row" :class="$style.navRow">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="col-12 col-xs-6 col-md"
            >
              <h4 :class="$style.itemTitle">{{ item.name }}</h4>
              <ul v-if="item.subitems.length" :class="$style.subitems">
                <li
                  v-for="(subitem, subitemIndex) in item.subitems"
                  :key="subitemIndex"
                  :class="$style.subitem"
                >
                  <NuxtLink :to="subitem.to">
                    {{ subitem.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
    <AppFooterBtm />
  </footer>
</template>

<script lang="ts" setup>
import AppFooterLogo from '~/components/AppFooter/AppFooterLogo.vue';
import AppWrapper from '~/components/AppWrapper/AppWrapper.vue';
import AppFooterSocials from '~/components/AppFooter/AppFooterSocials.vue';
import { useFooterNavItems } from '~/components/AppFooter/useFooterNavItems';
import AppFooterBtm from '~/components/AppFooter/AppFooterBtm.vue';

const items = useFooterNavItems;
</script>

<style lang="scss" module>
.footer {
  background-color: #e3e2e5;
  color: $dark;
  overflow: hidden;
  position: relative;
}

.wrapper {
  @include padding(0 0 146px);
}

.row {
  @include rfs(70px, --gutter-y);
  --gutter-x: 0;
}

.leftCol {
  text-align: center;

  @include media-breakpoint-up(lg) {
    @include padding-right(30px);
    text-align: left;
  }
}

.logo {
  @include margin-bottom(42px);
}

.contactText {
  @include font-size(22px);
  @include margin-bottom(66px);
  line-height: divide(30, 22);

  a {
    transition: color 150ms ease-in-out;
  }

  a:not(:hover) {
    color: inherit;
  }
}

.socials {
  justify-content: center;

  @include media-breakpoint-up(lg) {
    justify-content: flex-start;
  }
}

.navRow {
  --gutter-y: #{rem-calc(30px)};
}

.itemTitle {
  @include font-size(14px);
  line-height: math-div(18, 14);
  font-weight: 700;
  color: $primary;
  margin-bottom: rem-calc(22px);
}

.subitems {
  display: flex;
  flex-direction: column;
  row-gap: rem-calc(2px);
}

.subitem {
  position: relative;
  padding-left: rem-calc(12px);

  &:before {
    background-color: currentColor;
    content: '';
    width: 3px;
    height: 3px;
    border-radius: 50%;
    position: absolute;
    top: rem-calc(12px);
    left: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  a {
    @include font-size(14px);
    color: inherit;
    font-weight: 500;
    line-height: math-div(18, 14);
    transition: color 150ms ease-in-out;

    &:hover {
      color: $primary;
    }
  }
}
</style>
