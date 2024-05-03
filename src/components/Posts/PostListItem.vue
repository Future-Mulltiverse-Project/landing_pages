<template>
  <div :class="$style.item">
    <div :class="$style.imgCol">
      <div :class="$style.imgHolder">
        <MediaPicture
          v-if="item.image"
          :src="item.image.src"
          :width="item.image.width"
          :height="item.image.height"
          layout="fill"
        />
      </div>
    </div>
    <div :class="$style.textCol">
      <div class="row" :class="$style.headerRow">
        <div class="col">
          <h3 :class="$style.title">
            <NuxtLink
              :to="
                toGuidebookCategoryArticle({
                  params: {
                    categorySlug: route.params.categorySlug,
                    articleSlug: item.slug,
                  },
                })
              "
            >
              {{ item.title }}
            </NuxtLink>
          </h3>
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
      <div :class="$style.text">
        The Iamverse MetaVerse Commercial Space can be used, leased, traded or
        mined/stacked, as each cubic meter (m3) of Ecnomic space contains 1 FXPO
        MetaVerse Blockchain Coin, that after it has been mined can be staked
      </div>
      <div v-if="item.description" :class="$style.text">
        {{ item.description }}
      </div>
      <div class="row" :class="$style.footer">
        <div v-if="item.createdAt" class="col-auto">
          <div :class="$style.details">
            <!--<div :class="$style.avatar"></div>
            <strong>by {{ item.by }},&nbsp;</strong>-->
            <DateTimeSince :datetime="item.createdAt" />
          </div>
        </div>
        <!--<div class="col-auto">
          <div :class="$style.category">{{ category.title }}</div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DateTimeSince from '~/components/DateTime/DateTimeSince.vue';
import MediaPicture from '~/components/Media/MediaPicture.vue';
import { useTypedRoute } from '~/composables/useTypedRoute';
import SaveIcon from '~/icons/SaveIcon.vue';
import ShareIcon from '~/icons/ShareIcon.vue';
import { BlogArticle } from '~/types/BlogArticle/BlogArticle';
import { Media } from '~/types/Media';
import { ToGuidebookCategoryArticle } from '~/utils/routes';

defineProps<{
  item: Pick<
    BlogArticle,
    'id' | 'slug' | 'title' | 'description' | 'createdAt'
  > & {
    image?: Media;
  };
}>();

const route = useTypedRoute<ToGuidebookCategoryArticle>();
</script>

<style lang="scss" module>
.item {
  @include padding(30px 0);
  display: flex;
  flex-direction: column;
  //align-items: center;
  text-align: left;

  @include media-breakpoint-up(md) {
    flex-direction: row;
  }
}

.imgCol {
  align-self: center;
  margin: 0 auto;
  width: 100%;

  @include media-breakpoint-up(md) {
    @include margin-right(30px);
    flex: 0 0 rem-calc(300px);
    max-width: none;
    width: auto;
    margin-left: 0;
  }
}

.imgHolder {
  background-color: #9c9c9c;
  padding-bottom: 56.6666%;
  position: relative;
}

.header {
  @include padding-bottom(18px);
  align-items: center;
}

.textCol {
  @include padding-top(30px);
  flex-grow: 1;

  @include media-breakpoint-up(md) {
    padding-top: 0;
  }
}

.title {
  @include font-size(22px);
  font-weight: 600;
  line-height: divide(30, 22);
  margin-bottom: 0;

  a {
    transition: color 150ms ease-in-out;
  }

  a:not(:hover) {
    color: inherit;
  }
}

.text {
  @include font-size(16px);
  @include margin-bottom(32px);
  color: #9c9c9c;
  font-family: 'Nunito Sans', sans-serif;
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

.footer {
  --gutter-x: #{rem-calc(16px)};
  --gutter-y: #{rem-calc(16px)};
  align-items: center;
}

.details {
  @include font-size(14px);
  line-height: 1.2;
  align-items: center;
  display: flex;
  padding: rem-calc(5px 0);

  strong {
    color: $primary;
  }
}

.avatar {
  background-color: #fff;
  border-radius: 50rem;
  height: rem-calc(20px);
  margin-right: rem-calc(16px);
  overflow: hidden;
  position: relative;
  width: rem-calc(20px);
}

.category {
  @include font-size(12px);
  background-color: #171c36;
  color: $primary;
  line-height: divide(16, 12);
  padding: rem-calc(6px 18px);
}
</style>
