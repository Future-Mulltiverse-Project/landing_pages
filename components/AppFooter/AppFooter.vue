<template>
  <footer :class="$style.footer">
    <AppWrapper :class="$style.wrapper">
      <div class="grid grid-cols-1 gap-4 mt-8 mb-8 md:grid-cols-3" :class="$style.row">
        <div class="md:col-span-1 md:order-first" :class="$style.leftCol">
          <AppFooterLogo :class="$style.logo" />
          <p :class="$style.contactText">
            CONTACT US:
            <br />
            <a href="mailto:Support@futuremultiverse.com" class="font-medium" target="_top">Support@futuremultiverse.com</a>
          </p>
          <AppFooterSocials :class="$style.socials" />
        </div>
        <div class="md:col-span-2 md:pt-0 pt-6 ">
          <h4 class="text-lg font-bold" style="padding-top: 0px !important">
            <span class="text-cfb16d">FUTURE</span> MULTIVERSE
          </h4>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-4" :class="$style.navRow">
            <div
              v-for="(item, index) in items"
              :key="index"
              class=""
            >
              <h4 :class="$style.itemTitle">{{ item.name }}</h4>
              <ul v-if="item.subitems.length" :class="$style.subitems">
                <li
                  v-for="(subitem, subitemIndex) in item.subitems"
                  :key="subitemIndex"
                  :class="$style.subitem"
                >
                <NuxtLink v-if="typeof subitem.to === 'string' && subitem.to === 'unset'">
                  {{ subitem.name }}
                </NuxtLink>

                  <NuxtLink v-else  :to="subitem.to">
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
  padding-top: 20px;
}

.wrapper {
  @include padding(0 0 36px);
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
  @include font-size(15px);
  @include margin-bottom(24px);
  line-height: divide(30, 22);
  font-weight: 900;

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
  font-weight: bold;
  color: #000000;
}

.subitems {
  display: flex;
  flex-direction: column;
  row-gap: rem-calc(2px);
  list-style-type: none !important; /* Remove bullet points */
}

.subitem {
  position: unset;
  padding-left: rem-calc(0px);

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
