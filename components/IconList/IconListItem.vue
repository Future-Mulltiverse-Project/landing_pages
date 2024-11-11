<template>
  <article :class="$style.article">
    <div :class="$style.inner">
      <div :class="$style.icon">
        <slot name="icon" />
      </div>
      <h3 :class="$style.title"> <span style="color: #ffffff">{{ item.title_white_1 }}</span> <span style="color: #CFB16D"> {{ item.title_gold_1 }}</span> <span style="color: #ffffff"> {{ item.title_white_2 }}</span> <span style="color: #CFB16D">{{ item.title_gold_2 }}</span></h3>
      <!--div v-if="item.text" :class="$style.text"-->
      <div :class="$style.text">
        {{ item.text }} {{ item.text_grey }}
      </div>
      <!--button
        v-if="item.url"
        :to="item.url"
        :class="$style.btn"
        class="w-1/3 btn btn-sm btn-outline-primary"
        style="color: #ffffff"
      >
        Explore
    </button-->
    </div>
  </article>
</template>

<script lang="ts" setup>
export interface IconItem {
  icon: string;
  title: string;
  text?: string;
  title_white_1?: string;
  title_white_2?: string;
  title_gold_1?: string;
  title_gold_2?: string;
  text_grey?: string;
  url?: string;
}

defineProps<{ item: IconItem }>();
</script>

<style lang="scss" module>
.article {
  padding: 50px 0 ;
  text-align: center;
  position: relative;
  border-top: 2px solid transparent;
  border-bottom: 1px solid #2a3052;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.text_grey{
  color: #9C9C9C;
}

.inner {
  @include padding(0 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  border-left: 1px solid transparent;
  border-right: 1px solid #2a3052;
  width: 100%;
}

.icon {
  margin: 0 0 rem-calc(20px);

  svg {
    min-width: rem-calc(40px);
    min-height: rem-calc(40px);
  }
}

.title {
  font-size: 26px;
  line-height: math-div(30, 26);
  margin-bottom: rem-calc(24px);
  font-weight: 600;
  color: $primary;

  &:after {
    border-top: 2px solid white !important;
    content: '';
    display: block;
    margin: rem-calc(26px) auto 0;
    width: rem-calc(56px);
  }
}

.text {
  font-size: 16px;
  color: #9C9C9C;
  font-family: 'Nunito Sans', sans-serif;
  margin: 0 0 rem-calc(24px);
}

.btn {
  min-width: rem-calc(128px);
  margin-top: auto;
  padding-left: unset;
  padding-right: unset;
}
</style>
