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
