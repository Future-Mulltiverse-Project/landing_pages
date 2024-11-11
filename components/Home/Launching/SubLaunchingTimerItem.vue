<template>
  <div :class="$style.el">
    <h3 :class="$style.title">
        PLANNED<span style="color: #CFB16D"> PRE-LAUNCH</span> START:
    </h3>
    <slot />
  </div>
</template>

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

.count_text{
  font-size: 22px;
  text-align: center;
}
.title {
  font-size: 23px;
  line-height: math-div(30, 22);
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: rem-calc(10px);
}
</style>
