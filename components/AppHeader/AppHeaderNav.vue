<template>
  <nav>
    <ul class="row" :class="$style.row" style="margin-left: 10px;">
      <li class="col-auto" :class="$style.link" style="margin-top: 23px">
        <AppHeaderLogo />
      </li>
      <li class="col-auto" style="margin-top: 8px;">
        <nuxt-link  to="/"  exact :class="$style.link">Home</nuxt-link>
      </li>
      <li :class="[$style.dropdown]" class="col-auto">
        <nuxt-link exact :class="$style.link">Future Multiverse</nuxt-link>
        <div :class="$style.menu_spacer">
          <div :class="$style.menuInner">
            <nuxt-link :class="[$style.link_sub]"></nuxt-link>
          </div>
        </div>
        <div :class="$style.menu">
          <div :class="$style.menuInner">
            <nuxt-link :class="[$style.link_sub]">Welcome, Overview & Examples
            </nuxt-link>
            <nuxt-link :class="$style.link_sub">Enter Future Multiverse & EXPO
            </nuxt-link>
            <nuxt-link  :class="$style.link_sub">Explore Map
            </nuxt-link>
            <nuxt-link :class="$style.link_sub">Product & Service Packages
            </nuxt-link>
            <nuxt-link :class="$style.link_sub">Advanced Technologies
            </nuxt-link>
          </div>
        </div>
      </li>
      <li :class="[$style.dropdown]" class="col-auto">
        <nuxt-link exact :class="$style.link">Future Trends Catalyst</nuxt-link>
        <div :class="$style.menu_spacer">
          <div :class="$style.menuInner">
            <nuxt-link :class="[$style.link_sub]"></nuxt-link>
          </div>
        </div>
        <div :class="$style.menu" style="min-width: 12rem !important">
          <div :class="$style.menuInner">
            <nuxt-link :class="[$style.link_sub]">LaunchPad
            </nuxt-link>
            <nuxt-link :class="$style.link_sub">Marketplace
            </nuxt-link>
            <nuxt-link :class="$style.link_sub">Blockchain
            </nuxt-link>
            <nuxt-link :class="$style.link_sub">LAB
            </nuxt-link>
          </div>
        </div>
      </li>
      
      <li class="col-auto" style="margin-top: 8px;">
        <nuxt-link  to="https://www.futuremultiverse.com/quest"  :class="$style.link">Movement</nuxt-link>
      </li>
      
      <li :class="[$style.dropdown]" class="col-auto">
        <nuxt-link exact :class="$style.link">Launch</nuxt-link>
        <div :class="$style.menu_spacer">
          <div :class="$style.menuInner">
            <nuxt-link :class="[$style.link_sub]"></nuxt-link>
          </div>
        </div>
        <div :class="$style.menu" style="min-width: 12rem !important">
          <div :class="$style.menuInner">
            <nuxt-link :class="[$style.link_sub]">VIP Pre-Launch
            </nuxt-link>
            <nuxt-link :class="$style.link_sub">Pre-Launch
            </nuxt-link>
            <nuxt-link :class="$style.link_sub">Public-Launch
            </nuxt-link>
          </div>
        </div>
      </li>
      <li :class="[$style.dropdown]" class="col-auto">
        <nuxt-link exact :class="$style.link">Grace AI</nuxt-link>
        <div :class="$style.menu_spacer">
          <div :class="$style.menuInner">
            <nuxt-link :class="[$style.link_sub]"></nuxt-link>
          </div>
        </div>
        <div :class="$style.menu" style="min-width: 12rem !important">
          <div :class="$style.menuInner">
            <nuxt-link to="https://future-multiverse.gitbook.io/guidebook" :class="[$style.link_sub]">GuideBook
            </nuxt-link>
            <nuxt-link :class="$style.link_sub">ChatGuide
            </nuxt-link>
          </div>
        </div>
      </li>
      <li class="col-auto" :class="$style.btnCol">
        <NuxtLink
          class="btn btn-sm btn-outline-gradient-primary"
          :class="$style.btn"
        >
          Onboard
        </NuxtLink>
        <NuxtLink
          class="btn btn-sm btn-outline-gradient-primary"
          :class="$style.btn"
          style="margin-left: 30px"
        >
          Connect
        </NuxtLink>
      </li>
      <li class="col-auto" :class="$style.btnCol"></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useNavItems } from '~/components/AppHeader/useNavItems';
import TheLink from '~/components/utilities/TheLink.vue';
import HalfArrowRightIcon from '~/icons/HalfArrowRightIcon.vue';
import AppHeaderLogo from '~/components/AppHeader/AppHeaderLogo.vue';

const items = ref(useNavItems);
</script>

<style lang="scss" module>
.row {
  --gutter-x: #{rem-calc(31px)};
  justify-content: center;
  margin-left: unset !important;
}

.menuInner {
  padding-top: 2px;
  display: flex; /* Add this line */
  flex-direction: column; /* Add this line */
}

.link {
  font-size: 16px;
  color: inherit;
  font-weight: 600;
  //line-height: 1.2;
  //text-transform: uppercase;
  transition: color 0.2s ease-in-out;

  &:global(.router-link-active) {
    color: $primary;
  }

  &:hover {
    color: $primary;
  }
}

.link_sub {
  font-size: 16px;
  color: inherit;
  font-weight: 600;
  transition: color 0.2s ease-in-out;
  margin-top: 6px; /* Add this line */

  &:global(.router-link-active) {
    color: $primary;
  }

  &:hover {
    color: $primary;
  }
}

.dropdown {
  display: flex;
  position: relative;
  margin-top: 8px;

  &:hover {
    //background-color: #000000;
  }
}

.menu_spacer{
  
  display: none;
  min-width: rem-calc(18rem);
  position: absolute;
  padding-top: 2px;
  top: 100%;

  padding-bottom: 10px;
  border-radius: 7px;
  padding-left: 10px;
  padding-right: 10px;
  
  .dropdown--top & {
    top: auto;
    bottom: 100%;
    right: 50%;
    transform: translateX(50%);
    padding: 0 0 10px;
  }

  &__inner {
    //box-shadow: 0 0 rem-calc(25px) 0 rgba(#000, 0.2);
    width: 100%;
    padding: rem-calc(0 16px);
    position: relative;

    svg {
      //fill: #ffffff;
      margin-right: 10px;
      margin-left: -5px;
    }

    > a {
      color: inherit;
      cursor: pointer;
      display: block;
      font-size: rem-calc(14px);
      font-weight: 700;
      line-height: 1.25;
      padding: rem-calc(12px 0);
      position: relative;
      transition: color 150ms;
      user-select: none;
      white-space: nowrap;

      &:global(.active),
      &:hover {
        color: $primary;
      }

      &:hover {
        text-decoration: none;
      }
    }
  }

  .dropdown:hover & {
    display: block;
  }
}

.menu {
  display: none;
  min-width: rem-calc(18rem);
  position: absolute;
  margin-top: 15px;
  top: 100%;

  border-bottom: 2px solid #ffffff;
  padding-bottom: 10px;
  border-radius: 7px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgb(12, 12, 12, 0.5);

  .dropdown--top & {
    top: auto;
    bottom: 100%;
    right: 50%;
    transform: translateX(50%);
    padding: 0 0 10px;
  }

  &__inner {
    box-shadow: 0 0 rem-calc(25px) 0 rgba(#000, 0.2);
    width: 100%;
    padding: rem-calc(0 16px);
    position: relative;

    svg {
      fill: #ffffff;
      margin-right: 10px;
      margin-left: -5px;
    }

    > a {
      color: inherit;
      cursor: pointer;
      display: block;
      font-size: rem-calc(14px);
      font-weight: 700;
      line-height: 1.25;
      padding: rem-calc(12px 0);
      position: relative;
      transition: color 150ms;
      user-select: none;
      white-space: nowrap;

      &:global(.active),
      &:hover {
        color: $primary;
      }

      &:hover {
        text-decoration: none;
      }
    }
  }

  .dropdown:hover & {
    display: block;
  }
}
</style>
