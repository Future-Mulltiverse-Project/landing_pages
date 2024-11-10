<template>
  <Transition
    :enter-active-class="$style.enterActive"
    :leave-active-class="$style.leaveActive"
    :enter-from-class="$style.enterFrom"
    :leave-to-class="$style.leaveTo"
  >
    <aside v-if="visible" :class="$style.el">
      <button :class="$style.close" aria-label="Close" @click="close">
        <span />
        <span />
      </button>
      <div :class="$style.inner">
        <ul v-if="items && items.length">
          <li class="col-auto" style="margin-top: 8px;">
            <nuxt-link exact :class="$style.link">Home</nuxt-link>
          </li>
          <li class="col-auto" style="margin-top: 8px;">
            <nuxt-link :class="$style.link">Future Multiverse</nuxt-link>
          </li>
          <li class="col-auto" style="margin-top: 8px;">
            <nuxt-link :class="$style.link">Future Trends Catalyst</nuxt-link>
          </li>
          <li class="col-auto" style="margin-top: 8px;">
            <nuxt-link :class="$style.link">Movement</nuxt-link>
          </li>
          <li class="col-auto" style="margin-top: 8px;">
            <nuxt-link :class="$style.link">Launch</nuxt-link>
          </li>
          <li class="col-auto" style="margin-top: 8px;">
            <nuxt-link :class="$style.link">Grace AI</nuxt-link>
          </li>
        </ul>
      </div>
    </aside>
  </Transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useNavItems } from '~/components/AppHeader/useNavItems';
import { useNavPanel } from '~/components/NavPanel/useNavPanel';

const { visible, close } = useNavPanel();

const items = ref(useNavItems);
</script>

<style lang="scss" module>
.el {
  background-color: rgba($blue-800, 0.98);
  color: #fff;
  height: 100%;
  max-width: rem-calc(320px);
  position: fixed;
  right: 0;
  top: 0;
  width: 90%;
  z-index: z('modal');
}

.enterActive,
.leaveActive {
  transition:
    opacity 300ms ease-in-out,
    transform 300ms ease-in-out;
}

.enterFrom,
.leaveTo {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.close {
  background-color: transparent;
  border: 0;
  height: rem-calc(40px);
  padding: 0;
  position: absolute;
  right: rem-calc(16px);
  top: rem-calc(16px);
  width: rem-calc(40px);

  > span {
    display: block;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 0 0%;
    height: 2px;
    background-color: #9c9c9c;
  }

  > span:first-child {
    transform: rotate(45deg) translate(-50%, -50%);
  }

  > span:last-child {
    transform: rotate(-45deg) translate(-50%, -50%);
  }
}

.inner {
  flex-direction: column;
  height: 100%;
  justify-content: center;
  overflow-y: auto;
  padding: rem-calc(80px 40px);
}

.item {
  margin: rem-calc(12px 0);
}

.link {
  @include font-size(16px);
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
  @include font-size(17px);
  color: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  margin-top: 2px; /* Add this line */

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
  margin-top: 1px;

  &:hover {
    //background-color: #000000;
  }
}
.menuInner {
  padding-top: 8px;
  display: flex;
  flex-direction: column; /* Display dropdown items vertically */
}
.menu {
  display: none;
  min-width: rem-calc(26rem);
  position: absolute;
  top: 100%;

  border-bottom: 4px solid #ffffff;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 10px;
  background-color: rgb(12, 12, 12, 1);

  .dropdown--top & {
    top: 10px;
    bottom: 100%;
    right: 50%;
    transform: translateX(50%);
    padding: 0 0 10px;
  }

  &__inner {
    box-shadow: 0 0 rem-calc(25px) 0 rgba(#000, 0.2);
    width: 100%;
    padding: rem-calc(0 16px);
    position: block;

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
