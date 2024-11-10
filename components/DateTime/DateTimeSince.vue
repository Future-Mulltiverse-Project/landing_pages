<template>
  <time :datetime="datetime" :title="format(parsed, 'PPpp')">
    {{
      formatDistance(parsed, new Date(), {
        addSuffix: true,
      })
    }}
  </time>
</template>

<script lang="ts" setup>
import { format, formatDistance, parseISO } from 'date-fns';

const props = defineProps<{ datetime: string }>();
const parsed = computed(() => parseISO(props.datetime));
</script>
