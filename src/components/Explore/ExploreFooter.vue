<template>
  <footer :class="$style.footer">
    <div :class="$style.wrapper">
      <div class="row" :class="$style.row">
        <div class="col-auto">
          <ul class="row" :class="$style.socialsRow">
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
        </div>
        <div class="col-auto">
          <p :class="$style.text">
            
           You are going to enter the
           <strong>Future Multiverse</strong>
          </p>
        </div>
      </div>
    </div>
    <NuxtLink to="/" :class="$style.btn">
      <ArrowIcon />
    </NuxtLink>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ArrowIcon from '~/icons/ArrowIcon.vue';
import TwitterIcon from '~/icons/TwitterIcon.vue';
import FacebookIcon from '~/icons/FacebookIcon.vue';
import LinkedinIcon from '~/icons/LinkedinIcon.vue';
import InstagramIcon from '~/icons/InstagramIcon.vue';

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

.btn {
  align-items: center;
  border-radius: 50%;
  background-color: $blue-800;
  border: 3px solid $primary;
  color: #fff;
  top: rem-calc(-20px);
  display: flex;
  position: absolute;
  height: rem-calc(40px);
  justify-content: center;
  right: rem-calc(75px);
  margin-right: rem-calc($wrapper-padding-sm);
  transform: rotate(90deg);
  width: rem-calc(40px);
  transition: transform 0.2s ease-in-out;

  @include media-breakpoint-up(sm) {
    
    right: rem-calc(35px);
  }

  @media (min-width: 1271px) and (max-width: 1291px){
    right:3%;
  }

  @media (min-width: 1291px) and (max-width: 1345px){
    right:4.5%;
  }

  @media (min-width: 1395px){
    right:7.5%;
  }
  @media (min-width: 1345px) and (max-width: 1395px){
    right:6%;
  }
  @media (min-width: 1204px) and (max-width: 1269px){
    right:4%;
  }
 /* @media (min-width: 1441px) {
    right: 50%;
    transform: translateX(720px);
    margin-right: rem-calc(12px);
  }
*/
  &:hover {
    color: #fff;
    transform: rotate(90deg) scale(1.1);
  }

  svg {
    height: rem-calc(16px);
    width: rem-calc(16px);
  }
}


.footer {
  background-color: #1c203d;
  padding: rem-calc(18px 0);
  position: relative;
}

.wrapper {
  margin: 0 auto;
  position: relative;
  max-width: rem-calc(1440px);

  @media (max-width: 1440px) {
    margin: rem-calc(0 $wrapper-padding-sm);
  }
}

.row {
  @include padding-top(28px);
  align-items: center;
  --gutter-y: #{rem-calc(12px)};

  @include media-breakpoint-up(lg) {
    padding-top: 0;
  }
}

.socialsRow {
  --gutter-x: #{rem-calc(8px)};
}

.link {
  align-items: center;
  border-radius: 50%;
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  height: rem-calc(20px);
  justify-content: center;
  width: rem-calc(20px);
  transition:
    border-color 0.15s ease-in-out,
    color 0.15s ease-in-out;

  &:hover {
    border-color: $primary;
    color: $primary;
  }

  svg {
    height: rem-calc(8px);
    width: rem-calc(8px);
  }
}


.text {
  @include font-size(12px);
  line-height: 1.2;
  margin-bottom: 0;

  strong {
    color: $primary;
  }
}
</style>
