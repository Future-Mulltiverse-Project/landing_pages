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
        <div class="btn-container">
          <NuxtLink
            to="https://sandbox.futuremultiverse.dev/"
            class="btn btn-sm btn-outline-gradient-primary" :class="$style.btn"
          >
            Onboard
          </NuxtLink>
          <NuxtLink
            to="https://sandbox.futuremultiverse.dev/"
            class="btn btn-sm btn-outline-primary" :class="$style.btn"
          >
            Connect
          </NuxtLink>
                
          <ul>
            <li
              v-for="(item, index) in items"
              :key="index"
              :class="$style.item"
            >
              <ul v-if="item.subitems?.length" :class="$style.subitems">
                <li
                  v-for="(subitem, subitemIndex) in item.subitems"
                  :key="subitemIndex"
                  :class="$style.subitem"
                >
                  <NuxtLink :to="subitem.to" :class="$style.subitemLink">
                    {{ subitem.title }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </Transition>
</template>

<script lang="ts" setup>
import { useNavPanel } from '~/components/NavPanel/useNavPanel';
import { useGraceAiNavItems } from '~/components/Guidebook/useGraceAiNavItems';

const { visible, close } = useNavPanel();

const items = useGraceAiNavItems;
</script>

<style lang="scss" module>

.btn-container {
  display: flex;
}

.btn {
  width: 48%;
  margin-right: 1% !important; 
}

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
  height: 100%;
  overflow-y: auto;
  padding: rem-calc(50px 40px);
}

.item {
  padding: 24px   ;
  border-bottom: 1px solid #2a3052;

  &:last-child {
    border-bottom: 0;
  }
}

.itemText {
  font-size: 14px;
  align-items: center;
  color: $primary;
  display: inline-flex;

  svg {
    fill: #fff;
    height: rem-calc(16px);
    margin-right: rem-calc(10px);
    width: rem-calc(16px);
  }
}

.subitems {
  font-size: 13px;
  margin-top: 16px;
  row-gap: rem-calc(8px);
  color: #9c9c9c;
  display: flex;
  flex-direction: column;
  list-style: disc inside;
  font-weight: 500;
}

.subitem {
}

.subitemLink {
  font-size: 13px;
  color: #9c9c9c;
  font-weight: 500;
  display: inline-block;
  transition: color 150ms ease-in-out;

  &:hover {
    color: $primary;
  }
}
</style>
