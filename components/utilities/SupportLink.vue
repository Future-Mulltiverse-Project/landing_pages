<template>
  <a href="#" target="_blank" :class="$style.link">
    <CommentsIcon />
    <span>
      <span :class="$style.textPrimary">Need a Quote?</span>
      Let’s talk business!
    </span>
  </a>
</template>

<script>
import CommentsIcon from '~/icons/CommentsIcon';

export default {
  components: { CommentsIcon },
};
</script>

<style lang="scss" module>
.link {
  font-size: 14px;

  line-height: math-div(18, 14);
  display: inline-flex;
  align-items: center;
  color: #fff !important;

  svg {
    flex-shrink: 0;
    width: em-calc(35px, 14px);
    margin-right: em-calc(16px, 14px);
  }
}

.textPrimary {
  color: $primary;
}
</style>
