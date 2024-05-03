<template>
  <GuidebookLayout :title="category.title">
    <div :class="$style.top">
      <MediaPicture :src="Bg" :width="1200" :height="612" layout="fill" />
      <GuidebookBreadcrumbs
        :class="$style.breadcrumbs"
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
        ]"
      />
      <div :class="[$style.wrapper, $style.wrapperTop]">
        <MainSectionHeader
          :class="$style.header"
          :title="category.title"
          :subtitle="category.subtitle"
          title-lg
        />
        <MainSectionTextContent
          v-if="category.description"
          :class="$style.text"
        >
          <p>
            {{ category.description }}
          </p>
        </MainSectionTextContent>
      </div>
    </div>
    <div :class="$style.body">
      <div :class="$style.wrapper">
        <GuidebookSection
          v-if="category.articles?.length"
          title="Recently Added"
        >
          <PostListItem
            v-for="article in category.articles"
            :key="article.id"
            :item="article"
          />
        </GuidebookSection>
        <GuidebookSection title="Recent Uploads">
          <UploadListItem :item="upload" />
        </GuidebookSection>
      </div>
    </div>
  </GuidebookLayout>
</template>

<script lang="ts" setup>
import GuidebookBreadcrumbs from '~/components/Guidebook/GuidebookBreadcrumbs.vue';
import GuidebookSection from '~/components/Guidebook/GuidebookSection.vue';
import GuidebookLayout from '~/components/Layouts/GuidebookLayout.vue';
import MainSectionHeader from '~/components/MainSection/MainSectionHeader.vue';
import MainSectionTextContent from '~/components/MainSection/MainSectionTextContent.vue';
import PostListItem from '~/components/Posts/PostListItem.vue';
import UploadListItem from '~/components/Uploads/UploadListItem.vue';
import { ListBlogCategoriesResourceItem } from '~/types/BlogCategory/ListBlogCategoriesResource';
import { toGuidebook } from '~/utils/routes';
import Bg from '~/assets/images/launch-intro-bg2.jpg';
import MediaPicture from '~/components/Media/MediaPicture.vue';

defineProps<{ category: ListBlogCategoriesResourceItem }>();

const upload = {
  to: '/',
  title: 'Lightpaper V.01a',
  by: 'Simon Voelk',
  date: '4 Days ago',
  category: 'Resources',
};
</script>

<style lang="scss" module>
.top {
  @include padding-left(24px);
  @include padding-right(24px);
  position: relative;
  text-align: center;
}

.breadcrumbs {
  @include padding(24px 0);
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

.wrapperTop {
  @include padding(24px 0 66px);
}

.header {
  max-width: rem-calc(740px);
  margin: 0 auto rem-calc(16px);
}

.text {
  max-width: rem-calc(480px);
  margin: 0 auto;
}
</style>
