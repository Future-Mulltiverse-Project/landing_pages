<template>
  <ul class="row" :class="$style.row">
    <li v-for="(item, index) in socials" :key="index" class="col-auto">
      <NuxtLink
        :href="item.to"
        :aria-label="item.name"
        :class="$style.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <component :is="icons[item.icon]" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FacebookIcon from '~/icons/FacebookIcon.vue';
import InstagramIcon from '~/icons/InstagramIcon.vue';
import LinkedinIcon from '~/icons/LinkedinIcon.vue';
import TwitterIcon from '~/icons/TwitterIcon.vue';

const icons = {
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
};

const socials = ref([
  {
    name: 'Twitter',
    to: '#',
    icon: 'TwitterIcon',
  },
  {
    name: 'Facebook',
    to: '#',
    icon: 'FacebookIcon',
  },
  {
    name: 'Linkedin',
    to: '#',
    icon: 'LinkedinIcon',
  },
  {
    name: 'Instagram',
    to: '#',
    icon: 'InstagramIcon',
  },
]);
</script>

<style lang="scss" module>
.row {
  --gutter-x: #{rem-calc(16px)};
}

.link {
  align-items: center;
  border-radius: 50%;
  border: 2px solid #1c203d;
  color: #1c203d;
  display: flex;
  height: rem-calc(40px);
  justify-content: center;
  width: rem-calc(40px);
  transition:
    border-color 0.15s ease-in-out,
    color 0.15s ease-in-out;

  &:hover {
    border-color: $primary;
    color: $primary;
  }

  svg {
    height: rem-calc(16px);
    width: rem-calc(16px);
  }
}
</style>
