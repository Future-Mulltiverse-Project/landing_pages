<template>
  <div :class="$style.group">
    <span v-if="field" :class="$style.field">
      {{ field }}
    </span>
    <div v-if="items?.length" class="row" :class="$style.row">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="col-6 col-xs-4 col-sm-3"
      >
        <div :class="$style.check">
          <input
            :id="item.id"
            :class="$style.checkInput"
            type="radio"
            :name="name"
            :value="item.id"
          />
          <label :class="$style.checkLabel" :for="item.id">
            <span :class="$style.checkIndicator">
              <slot :icon="item.icon" />
            </span>
            {{ item.label }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  field?: string;
  name: string;
  items?: {
    icon: string;
    id: string;
    label: string;
  }[];
}>();
</script>

<style lang="scss" module>
.group {
  @include margin-bottom(44px);

  &:last-child {
    margin-bottom: 0;
  }
}

.field {
  @include font-size(16px);
  @include margin-bottom(24px);
  color: $primary;
  display: block;
  font-weight: 700;
  line-height: divide(30, 16);
}

.row {
  --gutter-x: #{rem-calc(20px)};
  --gutter-y: #{rem-calc(20px)};
}

.check {
  position: relative;
}

.checkInput {
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  visibility: hidden;
}

.checkIndicator {
  @include margin-bottom(22px);
  cursor: pointer;
  user-select: none;
  display: block;
  background-color: #15172e;
  color: #9c9c9c;
  border: 1px solid #2f3453;
  position: relative;
  width: 100%;

  &::before {
    display: block;
    content: '';
    padding-bottom: 100%;
  }

  .checkInput:checked + .checkLabel & {
    border-color: $primary;
    color: $primary;
  }

  svg {
    width: wrap-calc(50px, 130px);
    max-height: rem-calc(50px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: rem-calc(50px);

    > * {
      fill: currentColor !important;
    }
  }
}

.checkLabel {
  @include font-size(14px);
  color: #9c9c9c;
  display: block;
  font-family: 'Nunito Sans', sans-serif;
  line-height: divide(19, 14);
  text-align: center;

  .checkInput:checked ~ & {
    color: $primary;
  }
}
</style>
