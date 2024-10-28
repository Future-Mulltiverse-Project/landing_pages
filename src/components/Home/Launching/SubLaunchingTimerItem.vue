<template>
  <div :class="$style.el">
    <h3 :class="$style.title">
        THE<span style="color: #CFB16D"> PRE-LAUNCH</span> PHASE STARTED:
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

@media (max-width: 768px) and (min-width:720px){
    .title{
      font-size: 13px !important;
    }
}

@media (max-width: 400px) {
    .title{
      font-size: 13px !important;
      text-align: center;
    }
}

.count_text{
  font-size: 22px;
  text-align: center;
}
.title {
  @include font-size(22px);
  line-height: math-div(30, 22);
  font-weight: 600;
  margin-bottom: rem-calc(10px);
}
</style>
