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
          <li v-for="(item, index) in items" :key="index" :class="$style.item">
            <NuxtLink to="/" :class="$style.link">
              {{ item.name }}
            </NuxtLink>
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
  display: flex;
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
  @include font-size(14px);

  font-weight: 700;
  color: inherit;
  line-height: 1.285;
  text-transform: uppercase;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: $primary;
  }
}
</style>
