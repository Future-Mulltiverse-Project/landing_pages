<template>
  <form>
    <div>
      <!--div class="flex w-full max-w-sm items-center gap-1.5">
        <Input id="email" type="email" placeholder="Email" />
        <Button type="submit">
          Subscribe
        </Button>
      </div-->
      <input class="form-control" :class="$style.input" type="text" placeholder="Enter your email" />

      <button class="btn-inline-primary-sm sm:mt-0 mt-8" type="submit" :class="$style.btn">
        Sign up
      </button>
    </div>
    <div v-if="message" :class="[isError ? 'invalid-feedback' : 'valid-feedback']" style="display: block">
      {{ message }}
    </div>
  </form>
</template>

<script lang="ts" setup>
const message = '';
import { Input } from '@/components/ui/input';
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
  padding: 12px;
  width: 73%;
}

.btn {
  border: #cfb16d solid 2px;
  --btn-padding-x: #{rem-calc(38px)};
  flex-shrink: 0;
}
</style>
