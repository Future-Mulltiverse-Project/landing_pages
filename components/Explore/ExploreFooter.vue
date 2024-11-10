<template>
  <footer :class="$style.footer">
    <div :class="$style.wrapper" class="flex flex-col  items-center lg:items-start  ">
      <div class="grid grid-cols-1 gap-2 md:grid-cols-auto ">
        <ul class=""> 
          <li v-for="(item, index) in socials" :key="index" class="float-left">
            <button
              :href="item.to"
              :aria-label="item.name"
              :class="$style.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <component :is="icons[item.icon]" />
          </button>
        </li>
        <li  class="md:float-left float-none" >
            <p :class="$style.text" class="text-center md:text-right pt-0 md:pt-2">
              <span>You are going to enter the VR </span>FXPO Universe<span>. Requirements </span>here:
            </p>
          </li>
        </ul>
      </div>
      <!--NuxtLink to="/" :class="$style.btn">
        <ArrowIcon />
      </NuxtLink-->
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ArrowIcon from '~/icons/ArrowIcon.vue';
import TwitterIcon from '~/icons/TwitterWhiteIcon.vue';
import FacebookIcon from '~/icons/FacebookWhiteIcon.vue';
import LinkedinIcon from '~/icons/LinkedinWhiteIcon.vue';
import InstagramIcon from '~/icons/InstagramWhiteIcon.vue';

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

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

/*li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}*/

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
    height: rem-calc(25px);
    width: rem-calc(25px);
    color: #ffffff;
    margin-left: 0px !important;
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
  margin-right: 10px;
  border: 2px solid #CFB16D;
  color: #fff;
  display: flex;
  height: rem-calc(30px);
  justify-content: center;
  width: rem-calc(30px);
  transition:
    border-color 0.15s ease-in-out,
    color 0.15s ease-in-out;

  &:hover {
    border-color: $primary;
    color: $primary;
  }

  svg {
    height: rem-calc(12px);
    width: rem-calc(12px);
    margin-left: 0px !important;
  }
}


.text {
  @include font-size(14px);
  line-height: 1.2;
  font-weight: 500;
  margin-bottom: 0;
  span {
    color: $primary;
  }
}
</style>
