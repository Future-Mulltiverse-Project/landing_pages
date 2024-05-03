<template>
  <GuidebookLayout :title="category.title">
    <template v-if="article">
      <div :class="$style.top">
        <GuidebookBreadcrumbs
          :items="[
            {
              to: toGuidebook(),
              title: 'Guidebook',
            },
            {
              to: toGuidebookCategory({
                params: { categorySlug: category.slug },
              }),
              title: category.title,
            },
            {
              to: toGuidebookCategoryArticle({
                params: {
                  categorySlug: category.slug,
                  articleSlug: article.slug,
                },
              }),
              title: article.title,
            },
          ]"
        />
      </div>
      <div :class="$style.body">
        <div :class="$style.wrapper">
          <div :class="$style.header">
            <div class="row" :class="$style.headerRow">
              <div class="col">
                <h1 :class="$style.title">{{ article.title }}</h1>
              </div>
              <div class="col-auto">
                <div :class="$style.actions">
                  <NuxtLink to="/" :class="$style.action">
                    <SaveIcon />
                  </NuxtLink>
                  <NuxtLink to="/" :class="$style.action">
                    <ShareIcon />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <DateTimeSince
            v-if="article.createdAt"
            :class="$style.date"
            :datetime="article.createdAt"
          />
          <div
            v-for="section in article.sections"
            :key="section.key"
            v-html="section.attributes.text"
          ></div>
          <div :class="$style.text">
            <strong>
              Our platform offers a digital & decentralized VR Exhibition, a
              LaunchPad Accelerator, and a Web2 Marketplace with a focus on
              immersive experiences and innovative financing options
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
          </div>
        </div>
      </div>
    </template>
  </GuidebookLayout>
</template>

<script lang="ts" setup>
import { showError } from '#app';
import { computed } from 'vue';
import DateTimeSince from '~/components/DateTime/DateTimeSince.vue';
import GuidebookBreadcrumbs from '~/components/Guidebook/GuidebookBreadcrumbs.vue';
import GuidebookLayout from '~/components/Layouts/GuidebookLayout.vue';
import { useShowBlogArticle } from '~/composables/blogArticle/useShowBlogArticle';
import { useListCategories } from '~/composables/blogCategory/useListCategories';
import { useTypedRoute } from '~/composables/useTypedRoute';
import { BlogCategory } from '~/types/BlogCategory/BlogCategory';
import { toGuidebook, ToGuidebookCategoryArticle } from '~/utils/routes';
import ShareIcon from '~/icons/ShareIcon.vue';
import SaveIcon from '~/icons/SaveIcon.vue';

const { data: categories } = await useListCategories({
  params: { articles: true },
});

const route = useTypedRoute<ToGuidebookCategoryArticle>();

if (
  !categories.value?.data.length ||
  !route.params.categorySlug ||
  !categories.value.data.find((c) => c.slug === route.params.categorySlug)
) {
  throw showError({ statusCode: 404, statusMessage: 'Page not found.' });
}

const category = computed(
  () =>
    categories.value.data.find((c) => c.slug === route.params.categorySlug) as {
      slug: BlogCategory['slug'];
      title: BlogCategory['title'];
    },
);

const { data: article } = await useShowBlogArticle({
  params: { articleSlug: route.params.articleSlug },
});
</script>

<style lang="scss" module>
.top {
  text-align: center;
}

.body {
  @include padding-left(24px);
  @include padding-right(24px);
}

.wrapper {
  max-width: rem-calc(1050px);
  margin: 0 auto;
  position: relative;
}

.header {
  @include padding(20px 0);
  border-bottom: 1px solid #2a3052;
  margin-bottom: 20px;
}

.headerRow {
  align-items: center;
}

.title {
  @include font-size(44px);
  color: $primary;
  line-height: divide(55, 44);
  font-weight: 700;
  margin-bottom: 0;
}

.actions {
  display: flex;
  margin: rem-calc(0 -9px);
}

.action {
  color: #fff;
  display: inline-block;
  margin: rem-calc(0 9px);
  transition: color 150ms ease-in-out;

  &:hover {
    color: $primary;
  }

  svg {
    display: block;
    height: rem-calc(14px);
    width: rem-calc(14px);
  }
}

.date {
  @include font-size(14px);
}

.text {
  @include margin-top(35px);
  max-width: rem-calc(900px);

  p {
    @include font-size(16px);
    line-height: divide(24, 16);
    font-weight: 600;
    margin-bottom: rem-calc(25px);

    &:last-child {
      margin-bottom: 0;
    }
  }

  > strong {
    @include font-size(22px);
    @include margin-bottom(32px);
    display: block;
    color: $primary;
    font-weight: 600;
    line-height: divide(30, 22);
    max-width: rem-calc(900px);
  }
}
</style>
