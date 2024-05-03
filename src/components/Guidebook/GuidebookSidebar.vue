<template>
  <aside :class="$style.aside">
    <!-- Navigation panel content -->
    <div v-if="visible" class="navigation-panel">
      <ul>
        <!-- Loop through the guidebook navigation items and render links -->
        <li v-for="item in guidebookNavItems" :key="item.title">
          <span :class="$style.itemText">
            <!-- Assuming there is an icon property in your guidebookNavItems -->
            <component :is="item.icon" />
            {{ item.title }}
          </span>
          <ul
            v-if="item.subitems && item.subitems.length"
            :class="$style.subitems"
          >
            <li
              v-for="subitem in item.subitems"
              :key="subitem.title"
              :class="$style.subitem"
            >
              <router-link :to="subitem.to" :class="$style.subitemLink">
                {{ subitem.title }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useGuidebookNavItems } from '~/components/Guidebook/useGuidebookNavItems';

const visible = ref(true);
const guidebookNavItems = useGuidebookNavItems;
</script>

<style lang="scss" module>
.aside {
  background-color: #10152d;
  color: #fff;
  height: 1500px;
  @media (min-width: 1400px) {
    height: 1500px;
  }
  max-width: rem-calc(320px);
  position: relative;
  right: 0;
  top: 0;
  width: 90%;
  z-index: z('modal');
}
.guidebook{
  
  @media (max-width: 1024px) {
    height: 1145px;
  }
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
  @include padding(24px);
  border-bottom: 1px solid #2a3052;

  &:last-child {
    border-bottom: 0;
  }
}

.itemText {
  @include font-size(14px);
  align-items: center;
  color: white;
  display: inline-flex;
  margin-top: 15px;

  svg {
    fill: #fff;
    height: rem-calc(20px);
    margin-right: rem-calc(10px);
    width: rem-calc(20px);
  }
}

.subitems {
  @include font-size(13px);
  @include margin-top(16px);
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
  @include font-size(13px);
  color: #9c9c9c;
  font-weight: 500;
  display: inline-block;
  transition: color 150ms ease-in-out;

  &:hover {
    color: $primary;
  }
}
</style>
