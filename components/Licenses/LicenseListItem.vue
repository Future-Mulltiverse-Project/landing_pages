<template>
  <div :class="$style.item">
    <div :class="$style.blurWrapper">
      <div :class="$style.blur" />
    </div>
    <div :class="$style.itemInner">
      <div :class="$style.blurWrapper">
        <div :class="$style.blur" />
      </div>
      <div :class="$style.icon">
        <MediaPicture
          :src="item.icon"
          :width="340"
          :height="340"
          layout="fill"
          contain
        />
      </div>
      <div :class="$style.content">
        <h4 :class="$style.title">{{ item.title }}</h4>
        <div v-if="item.text" :class="$style.text">{{ item.text }}</div>
        <nuxt-link :to="{ name: 'index' }"
          class="btn btn-sm btn-outline-primary"
          :class="$style.btn">
          VIEW LICENSE
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import MediaPicture from "~/components/Media/MediaPicture";

interface Item {
  icon: string;
  title: string;
  text?: string;
}

defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true
  }
});
</script>

<style lang="scss" module>
.item {
  background-color: #141830;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  text-align: center;
  padding-top: rem-calc(10px);
  position: relative;
}

.itemInner {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
}

.blurWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 100%;
}

.blur {
  width: wrap-calc(616px, 374px);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  &:before {
    background: radial-gradient(farthest-side, #3D4266, rgba(#3D4266, 0.5) 40%, rgba(#3D4266, 0));
    //background: radial-gradient(
    //    rgba(#3D4266, 1),
    //    rgba(#3D4266, 0.7) 40%,
    //    rgba(#3D4266, 0) 70%
    //);
    border-radius: 50%;
    content: "";
    display: block;
    padding-bottom: 60%;
  }
}

.icon {
  height: rem-calc(170px);
  width: rem-calc(170px);
  margin: rem-calc(-85px) auto rem-calc(34px);
  position: relative;
}

.content {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: rem-calc(0 40px 40px);
  position: relative;
}

.title {
  font-size: 26px;
  line-height: math-div(30, 26);
  color: $primary;
  font-weight: 600;
  margin-bottom: rem-calc(38px);

  &:after {
    background-color: $primary;
    content: '';
    display: block;
    height: 3px;
    margin: rem-calc(28px) auto 0;
    width: rem-calc(80px);
  }
}


.text {
  color: #9C9C9C;
  margin-bottom: rem-calc(34px);
}

.btn {
  margin-top: auto;
}
</style>
