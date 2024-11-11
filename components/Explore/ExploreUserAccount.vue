<template>
  <div :class="$style.el">
    <div :class="$style.name">Hello, Simon</div>
    <button type="button" :class="$style.btn" @click="show">
      <span :class="$style.avatar"></span>
    </button>
    <div v-if="visible" :class="$style.dropdown">
      <ul :class="$style.list">
        <li>
          <NuxtLink to="/" :class="$style.dropdownItem">My Account</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" :class="$style.dropdownItem">Settings</NuxtLink>
        </li>
        <li>
          <button type="button" :class="$style.dropdownItem">Log-Out</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);

function show() {
  visible.value = !visible.value;
}
</script>

<style lang="scss" module>
.el {
  align-items: center;
  display: inline-flex;
  position: relative;
}

.name {
  font-size: 14px;
  color: $primary;
  font-weight: 700;
  text-transform: uppercase;
}

.btn {
  align-items: center;
  background-color: transparent;
  border: 0;
  display: inline-flex;
  padding: 0;
}

.avatar {
  background-color: #15172e;
  display: block;
  border-radius: 50rem;
  margin-left: rem-calc(14px);
  height: rem-calc(40px);
  position: relative;
  overflow: hidden;
  width: rem-calc(40px);
}

.dropdown {
  background-color: $primary;
  color: #fff;
  position: absolute;
  top: 100%;
  padding: rem-calc(10px 16px);
  right: 0;
  width: rem-calc(120px);
  margin-top: rem-calc(24px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: rem-calc(20px);
    transform: translate(50%, -100%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent $primary transparent;
  }
}

.list {
  display: flex;
  flex-direction: column;
  row-gap: rem-calc(10px);
}

.dropdownItem {
  font-size: 14px;
  color: inherit;
  display: inline-block;
  font-weight: 500;
  line-height: 1.2;

  &:is(button) {
    background-color: transparent;
    border: 0;
    padding: 0;
  }
}
</style>
