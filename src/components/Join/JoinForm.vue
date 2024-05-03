<template>
  <form>
    <div :class="$style.group">
      <input
        class="form-control"
        :class="$style.input"
        type="text"
        placeholder="Enter your email"
      />
      <button class="btn btn-primary" type="submit" :class="$style.btn">
        Sign in
      </button>
    </div>
    <div
      v-if="message"
      :class="[isError ? 'invalid-feedback' : 'valid-feedback']"
      style="display: block"
    >
      {{ message }}
    </div>
  </form>
</template>

<script lang="ts" setup>
const message = '';
</script>

<style lang="scss" module>
.group {
  display: flex;
  flex-direction: column;
  row-gap: rem-calc(10px);

  @include media-breakpoint-up(xs) {
    flex-direction: row;
    row-gap: 0;
  }
}

.input {
  background-color: #fff !important;
  border-color: #fff !important;
}

.btn {
  --btn-color: #fde8ae;
  --btn-hover-color: #fde8ae;
  --btn-padding-x: #{rem-calc(38px)};
  flex-shrink: 0;
}
</style>
