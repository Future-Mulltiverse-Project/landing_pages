<template>
  <div :class="$style.el">
    <p style="margin-top: -16%; text-align: center; color: #CFB16D; font-size: 30px; margin-bottom: 30px;">COUNTDOWN</p>
    <h3 :class="$style.title">
      <span style="color: #CFB16D">NEXT UPDATE</span> & ANNOUNCEMENT:
    </h3>
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" module>
.el {
  border-bottom: 1px solid #fff;
  padding-bottom: rem-calc(40px);
  margin-bottom: rem-calc(28px);

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
}
@media (max-width: 768px) and (min-width:720px){
    .title{
      font-size: 15px !important;
    }
}

.title {
  @include font-size(22px);
  line-height: math-div(30, 22);
  font-weight: 600;
  margin-bottom: rem-calc(10px);
}
</style>
