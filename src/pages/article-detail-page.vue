<template>
  <GuidebookLayout :breadcrumbs-items="getBreadcrumbsItems">
    <div v-if="category" class="guidebook">
      <MediaPicture
        :class="$style.bg"
        :src="Bg"
        :width="1927"
        :height="881"
        layout="fill"
      />
      <GuidebookBreadcrumbs :items="getBreadcrumbsItems" />
      <h1>{{ category.title }}</h1>
      <div v-if="article">
        <h2>{{ article.title }}</h2>
        <div v-html="article.content" />
      </div>
      <div v-else>
        <p>Article not found</p>
      </div>
    </div>
    <div v-else class="guidebook">
      <MediaPicture
        :class="$style.bg"
        :src="Bg"
        :width="1927"
        :height="881"
        layout="fill"
      />
      <AppWrapper>
        <p :class="$style.text5">HOME / WELCOME TO THE FUTURE MULTIVERSE</p>
        <div :class="$style.text22">
          <span>Enter the Future Multiverse</span>
        </div>

        <div :class="$style.logo99" class="col-md-11">
          &nbsp;
          <span :class="$style.line"></span>
        </div>
        <div class="row" :class="$style.form">
          <div :class="$style.logo0" class="col-md-1 col-sm-1"></div>

          <div :class="$style.logo5" class="col-md-4">
            <div :class="$style.txt8">
              <span :class="$style.image"></span>
              <span :class="$style.txt7">by Simon Voelk, &nbsp;</span>
              4 Days ago
            </div>
          </div>
          <div :class="$style.logo" class="col-md-3"></div>
          <div :class="$style.logo67" class="col-md-0"></div>

          <div :class="$style.logo66" class="col-md-4">
            <div :class="$style.txt8">
              <a :class="$style.anchor2"></a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a :class="$style.anchor3"></a>
            </div>
          </div>
        </div>
        <div :class="$style.text33">
          <strong>
            Our platform offers a digital & decentralized VR Exhibition, a
            LaunchPad Accelerator, and a Web2 Marketplace with a focus on
            immersive experiences and innovative financing options
          </strong>
        </div>
        <div>
          <p :class="$style.text4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </div>
        <div class="row" :class="$style.form1">
          <div :class="$style.logo0" class="col-md-1"></div>
        </div>

        <div :class="$style.log">
          <MediaPicture :src="Bg0" :width="284" :height="284" />
        </div>
      </AppWrapper>
    </div>
    <ExploreFooter />
  </GuidebookLayout>
</template>

<script setup>
import { ref, computed, onMounted, onErrorCaptured } from 'vue';
import Bg from 'assets/images/graceai/wormhole.png';
import ExploreFooter from '~/components/Explore/ExploreFooterArticleDetail.vue';
import GuidebookLayout from '~/components/Layouts/GuidebookLayout.vue';
import GuidebookBreadcrumbs from '~/components/Guidebook/GuidebookBreadcrumbs.vue';
import { useShowBlogArticle } from '~/composables/blogArticle/useShowBlogArticle';
import { useListCategories } from '~/composables/blogCategory/useListCategories';
import { useTypedRoute } from '~/composables/useTypedRoute';
import {
  toGuidebook,
  toGuidebookCategory,
  toGuidebookCategoryArticle,
} from '~/utils/routes';

const categories = ref(null);
const route = useTypedRoute();
const categorySlug = ref(route.params.categorySlug);
const articleSlug = ref(route.params.articleSlug);

const category = computed(() =>
  categories.value?.data.find((c) => c.slug === categorySlug.value),
);

const article = ref(null);
const { fetchData } = useShowBlogArticle({
  params: { articleSlug: articleSlug.value },
});

onMounted(async () => {
  try {
    if (!categorySlug.value) {
      console.error('Category Slug is missing');
      return;
    }

    const { data, error } = await fetchData();
    if (error) {
      console.error('Failed to fetch article data', error);
    } else {
      article.value = data;
    }
  } catch (error) {
    console.error(
      'An unexpected error occurred while fetching article data',
      error,
    );
  }
});

onMounted(async () => {
  try {
    const { data } = await useListCategories({ params: { articles: true } });
    categories.value = data;
  } catch (error) {
    console.error(
      'An unexpected error occurred while fetching category data',
      error,
    );
  }
});

const getBreadcrumbsItems = computed(() => {
  return [
    { to: toGuidebook(), title: 'Guidebook' },
    {
      to: toGuidebookCategory({
        params: { categorySlug: category?.value?.slug },
      }),
      title: category?.value?.title || 'Category Not Found',
    },
    {
      to: toGuidebookCategoryArticle({
        params: {
          categorySlug: category?.value?.slug,
          articleSlug: article?.value?.slug || '',
        },
      }),
      title: article?.value?.title || 'Article Not Found',
    },
  ];
});

// Add error handling for setup function
onErrorCaptured((error) => {
  console.error('An error was captured during setup:', error);
  // You can choose to log, display a message, or take other actions based on your requirements
  return false; // Prevent the error from propagating further
});
</script>

<style lang="scss" module>
.logo0 {
  @include rfs(10%, width);
  min-width: rem-calc(10%);
  @media (max-width: 1200px) {
    @include rfs(10%, width);
    min-width: rem-calc(10%);
  }
}
.form {
  margin-top: -12%;
  @media (max-width: 1200px) {
    margin-top: -22%;
  }
}
.txt8 {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: -90px;
}
.txt7 {
  width: 100px;

  margin-left: 20px;
  color: #cfb16d;
  font-size: 14px;
}
.image {
  @include rfs(21px, width);
  min-width: rem-calc(21px);

  height: 21px;
  border-radius: 5px;
  background-image: url(assets/images/graceai/Simon.png);
}

.anchor2 {
  @include rfs(10px, width);
  min-width: rem-calc(10px);
  height: 12px;
  margin-right: 5px;
  background-repeat: no-repeat;
  cursor: pointer;
  background-image: url(assets/images/graceai/Vector.png);
}

.anchor3 {
  @include rfs(15px, width);
  min-width: rem-calc(15px);
  height: 12px;
  border: none !important;
  background-image: url(assets/images/graceai/Vector3.png);
  cursor: pointer;
}

.anchor {
  @include rfs(130px, width);
  min-width: rem-calc(130px);
  height: 25px;
  margin-left: 30px;
  background-image: url(assets/images/graceai/anchor.png);
  cursor: pointer;
}

.logo {
  @include rfs(20%, width);
  min-width: rem-calc(20%px);
  @media (max-width: 1200px) {
    @include rfs(20%, width);
    min-width: rem-calc(20%);
  }
  height: 100px;
  margin-bottom: rem-calc(50px);
  margin-top: 8%;
}

.line {
  min-width: 90%;
  height: 0.9px;
  background-image: url(assets/images/graceai/line.png);
  display: inline-block;
  vertical-align: middle;
  margin-left: -1%;
  @media (max-width: 1200px) {
    margin-left: -12%;
  }
}

.logo99 {
  @include rfs(100%, width);
  min-width: rem-calc(100%);
  height: 100px;
  margin-bottom: rem-calc(0px);
  margin-left: 100px;
  margin-top: -20px;
  display: inline-block;
  vertical-align: middle;
}

.logo9 {
  @include rfs(20%, width);
  min-width: rem-calc(20%);
  height: 100px;
  margin-bottom: rem-calc(0px);
  margin-top: 4%;
  display: inline-block;
  vertical-align: middle;
}
.logo5 {
  @include rfs(30%, width);
  min-width: rem-calc(30%);
  @media (max-width: 1200px) {
    @include rfs(30%, width);
    min-width: rem-calc(30%);
  }
  font-size: 15px;
  height: 100px;
  margin-bottom: rem-calc(50px);
  margin-top: 8%;
}
.logo66 {
  @include rfs(16%, width);
  min-width: rem-calc(16%);
  @media (max-width: 1200px) {
    @include rfs(16%, width);
    min-width: rem-calc(16%);
  }
  font-size: 15px;
  height: 100px;
  margin-bottom: rem-calc(50px);
  margin-top: 8%;
}
.logo67 {
  @include rfs(24%, width);
  min-width: rem-calc(24%);
  @media (max-width: 1200px) {
    @include rfs(24%, width);
    min-width: rem-calc(24%);
  }
  font-size: 15px;
  height: 100px;
  margin-bottom: rem-calc(50px);
  margin-top: 8%;
}
.logo6 {
  margin-top: 4px;
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: 100;
}

.text22 {
  @include font-size(40px);
  margin-bottom: rem-calc(30px);
  font-weight: 900;
  line-height: divide(70, 50);
  margin-left: 8%;
  @media (max-width: 1200px) {
    margin-left: 8%;
  }
  margin-right: auto;
  max-width: em-calc(550, 40);
  margin-top: 6%;

  strong {
    color: $white;
  }
  span {
    color: $primary;
  }
}

.text1 {
  .logo4 {
    @include rfs(7%, width);
    min-width: rem-calc(7%);
    @media (max-width: 641px) {
      width: 12%;
    }
  }

  @include font-size(86px);
  margin-bottom: rem-calc(30px);
  font-weight: 700;
  line-height: divide(70, 50);
  margin-left: auto;
  margin-right: auto;
  max-width: em-calc(550, 40);
  margin-top: 6%;
  text-align: center;
  text-transform: uppercase;

  strong {
    color: $white;
  }
  span {
    color: $primary;
  }
}

.text33 {
  @include font-size(21px);
  margin-bottom: rem-calc(30px);
  font-weight: 350;
  line-height: divide(70, 50);
  margin-left: 100px;
  margin-right: 350px;
  font-family: Bai Jamjuree;
  margin-top: -5%;
  @media (max-width: 1200px) {
    margin-left: 50px;
    margin-right: 50px;
  }
  strong {
    color: $white;
  }
  span {
    color: $primary;
  }
}

.text4 {
  @include font-size(15px);
  margin-bottom: rem-calc(30px);
  font-weight: 100;
  line-height: divide(70, 50);
  margin-left: 100px;
  margin-right: 350px;

  margin-top: 2%;
  @media (max-width: 1200px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  strong {
    color: $white;
  }
  span {
    color: $primary;
  }
}

.text44 {
  @include font-size(15px);
  margin-bottom: rem-calc(30px);
  font-weight: 100;
  line-height: divide(70, 50);
  margin-left: 100px;
  margin-right: 350px;

  margin-top: 2%;
  @media (max-width: 1200px) {
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 50%;
  }

  strong {
    color: $white;
  }
  span {
    color: $primary;
  }
}

.text5 {
  font-weight: 700;
  font-size: 8px;
  margin-top: 78px;
  margin-left: 22px;
}

.text2 {
  font-size: 35px;
}
.bg {
  opacity: 0.9;
}

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
