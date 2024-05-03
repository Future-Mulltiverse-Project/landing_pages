<script lang="ts" setup>
import { showError } from '#app';
import { computed } from 'vue';
import { useListCategories } from '~/composables/blogCategory/useListCategories';

const { data: categories } = await useListCategories({
  params: { articles: true },
});

if (!categories.value?.data.length) {
  throw showError({ statusCode: 404, statusMessage: 'Page not found.' });
}

const category = computed(() => categories.value.data[0]);

await navigateTo(
  toGuidebookCategory({ params: { categorySlug: category.value.slug } }),
);
</script>
