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
        <div :class="$style.link111"></div>
        <div class="row" :class="$style.row">
          <div class="col-1"></div>
          <div class="col-11">
            <NuxtLink to="/" :class="$style.link">
              <HeadCommentIcon />
              <span style="color: #fff">Grace</span>
              <span style="color: #cfb16d">AI</span>
            </NuxtLink>
          </div>
        </div>

        <div class="row" :class="$style.row">
          <div class="col-1"></div>
          <div class="col-11">Chat has started</div>
        </div>

        <div class="row" :class="$style.row">
          <div class="col-1"></div>
          <div class="col-11">
            <NuxtLink :class="$style.link">
              <HeadCommentIcon2 :class="$style.link11" />

              <div
                :class="[
                  $style.chatbox,
                  'd-flex',
                  'flex-column',
                  'flex-grow-1',
                ]"
              >
                <div
                  class="row"
                  :class="[
                    $style.row2,
                    'justify-content-start',
                    'align-items-end',
                  ]"
                >
                  What is the Future Multiverse about?
                </div>

                <div
                  class="row"
                  :class="[
                    $style.row51,
                    'justify-content-end',
                    'align-items-end',
                  ]"
                >
                  <div class="col-6" :class="$style.textsIcon1">
                    <a
                      href="#"
                      class="attachment-icon btn"
                      :class="$style.icons1"
                    >
                      <b><span>2 hours ago</span></b>
                    </a>
                  </div>

                  <div class="col-2" :class="$style.textsIcon">
                    <a
                      href="#"
                      class="attachment-icon btn"
                      :class="$style.icons"
                    >
                      <b><span :class="$style.icons3"></span></b>
                    </a>
                  </div>
                  <div class="col-2" :class="$style.textsIcon">
                    <a
                      href="#"
                      class="attachment-icon btn"
                      :class="$style.icons"
                    >
                      <b><span :class="$style.icons4"></span></b>
                    </a>
                  </div>
                  <div class="col-2" :class="$style.textsIcon">
                    <a
                      href="#"
                      class="attachment-icon btn"
                      :class="$style.icons"
                    >
                      <b><span :class="$style.icons5"></span></b>
                    </a>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <br />
        <br />

        <div class="row" :class="$style.row">
          <div class="col-1"></div>
          <div class="col-11">
            <NuxtLink :class="$style.link13">
              <HeadCommentIcon3 :class="$style.link13" />

              <div
                :class="[
                  $style.chatbox2,
                  'd-flex',
                  'flex-column',
                  'flex-grow-1',
                ]"
              >
                <div
                  class="row"
                  :class="[
                    $style.row2,
                    'justify-content-end',
                    'align-items-end',
                  ]"
                >
                  The term "metaverse" refers to a virtual reality space where
                  users can interact with a computer-generated environment and
                  other users in real-time. It's essentially a collective
                  virtual shared space that is created by the convergence of
                  virtual reality (VR), augmented reality (AR), and the
                  internet. The concept of the metaverse is often associated
                  with immersive, highly interactive, and persistent virtual
                  worlds. The metaverse goes beyond individual virtual reality
                  experiences or online games. It envisions a fully
                  interconnected digital universe where people can socialize,
                  work, play, create, and engage in various activities. It aims
                  to provide a seamless blend ofphysical and virtual reality,
                  allowing users to traverse and interact with diverse virtual
                  environments using avatars or digital representations of
                  themselves. While the concept of the metaverse has been
                  popularized recently, it's important to note that the
                  realization of a full-fledged metaverse is still in its early
                  stages. However, companies, developers, and innovators across
                  various industries are actively working on advancing virtual
                  reality, augmented reality, and online platforms to build and
                  shape the future of the metaverse.
                </div>

                <div
                  class="row"
                  :class="[
                    $style.row5,
                    'justify-content-end',
                    'align-items-end',
                  ]"
                >
                  <div class="col-6" :class="$style.textsIcon1">
                    <a
                      href="#"
                      class="attachment-icon btn"
                      :class="$style.icons1"
                    >
                      <b><span>2 hours ago</span></b>
                    </a>
                  </div>

                  <div class="col-2" :class="$style.textsIcon">
                    <a
                      href="#"
                      class="attachment-icon btn"
                      :class="$style.icons"
                    >
                      <b><span :class="$style.icons3"></span></b>
                    </a>
                  </div>
                  <div class="col-2" :class="$style.textsIcon">
                    <a
                      href="#"
                      class="attachment-icon btn"
                      :class="$style.icons"
                    >
                      <b><span :class="$style.icons4"></span></b>
                    </a>
                  </div>
                  <div class="col-2" :class="$style.textsIcon">
                    <a
                      href="#"
                      class="attachment-icon btn"
                      :class="$style.icons"
                    >
                      <b><span :class="$style.icons5"></span></b>
                    </a>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </AppWrapper>
    </div>

    <ExploreFooter />
  </GuidebookLayout>
</template>

<script setup>
import { ref, computed, onMounted, onErrorCaptured } from 'vue';
import HeadCommentIcon from '~/icons/HeadCommentIcon.vue';
import HeadCommentIcon2 from '~/icons/HeadCommentIcon2.vue';
import HeadCommentIcon3 from '~/icons/HeadCommentIcon3.vue';
import Bg from 'assets/images/graceai/wormhole.png';
import ExploreFooter from '~/components/Explore/ExploreFooterGuidebook2.vue';
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
.link111 {
  margin-top: 15%;
}

.link11 {
  border-radius: 60px;
}

.link13 {
  border-radius: 10px;
}

.icons3 {
  @include rfs(20px, width);
  min-width: rem-calc(20px);
  height: 20px;
  border-radius: 5px;
  background-image: url(assets/images/graceai/Heart.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
}

.icons4 {
  @include rfs(20px, width);
  min-width: rem-calc(20px);
  height: 20px;
  border-radius: 5px;
  background-image: url(assets/images/graceai/Restore_Down.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
}

.icons5 {
  @include rfs(20px, width);
  min-width: rem-calc(20px);
  height: 20px;
  border-radius: 5px;
  background-image: url(assets/images/graceai/Share.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
}

.textsIcon {
  text-align: right;
  max-width: 10%;
}

.row51 {
  margin-bottom: -12%;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
}

.row5 {
  margin-bottom: -7%;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1200px) {
    margin-bottom: -15%;
  }
}

.icons2 {
  @include rfs(20px, width);
  min-width: rem-calc(20px);
  height: 20px;
  border-radius: 5px;
  background-image: url(assets/images/graceai/Simon.png);
}
.icons {
  margin-right: 0;
}

.icons1 {
  margin-right: 0;
  color: #fff;
  font-size: 12px;
  text-transform: lowercase;
}

.textsIcon1 {
  text-align: right;
  max-width: 50%;
}

.row2 {
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
  padding-left: 20px;
  padding-bottom: 10px;
  justify-content: flex-start;
}
.row {
  margin-top: 2%;
}

.chatbox {
  right: 20px;
  background-color: white;
  border-radius: 20px 20px 0 20px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: auto;
  height: auto;
  box-sizing: content-box;

  max-width: 80%;
  color: black;
  font-size: 16px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  padding: 0px;
  border-radius: 10px;
  margin-left: 28px;
  position: relative;
  text-align: center;

  @media (max-width: 1200px) {
    max-width: 80%;
    height: auto;
  }
}

.chatbox::before {
  content: '';
  position: absolute;
  top: 10px;
  left: -20px;
  border-width: 10px;
  border-style: solid;
  border-color: transparent white transparent transparent;
}

.chatbox2 {
  right: 20px;
  background-color: #cfb16d;
  border-radius: 20px 20px 0 20px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: auto;
  height: auto;
  box-sizing: content-box;

  max-width: 80%;
  color: black;
  font-size: 16px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  margin-left: 28px;
  position: relative;
  @media (max-width: 1200px) {
    margin-bottom: 90%;
  }
}

.chatbox2::before {
  content: '';
  position: absolute;
  top: 10px;
  left: -20px;
  border-width: 10px;
  border-style: solid;
  border-color: transparent #cfb16d transparent transparent;
}

.link13 {
  display: none;
  @include font-size(16px);

  @include media-breakpoint-up(lg) {
    display: inline-flex;
  }
  @media (max-width: 1200px) {
    display: inline-flex;
  }

  svg {
    height: rem-calc(90px);
    margin-right: rem-calc(2px);
    width: rem-calc(90px);
  }
}

.link {
  @include font-size(16px);
  align-items: center;

  @include media-breakpoint-up(lg) {
    display: inline-flex;
  }
  @media (max-width: 1200px) {
    display: inline-flex;
  }
  svg {
    height: rem-calc(40px);
    margin-right: rem-calc(12px);
    width: rem-calc(40px);
  }
}

.form {
  margin-top: -10%;
}
.txt8 {
  display: flex;
  align-items: center;
  font-size: 10px;
}
.txt7 {
  width: 100px;
  margin-left: 10px;
  color: #cfb16d;
}
.image {
  @include rfs(20px, width);
  min-width: rem-calc(20px);
  height: 20px;
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
  @include rfs(100px, width);
  min-width: rem-calc(160px);
  height: 100px;
  margin-bottom: rem-calc(50px);
  margin-top: 8%;
  background-image: url(assets/images/graceai/guidebook1.png);
}

.line {
  min-width: 85%;
  height: 1px;
  background-image: url(assets/images/graceai/line.png);
  display: inline-block;
  vertical-align: middle;
}

.logo99 {
  @include rfs(100%, width);
  min-width: rem-calc(100%);
  height: 100px;
  margin-bottom: rem-calc(0px);
  margin-left: 6%;
  margin-top: 4%;
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
  @include rfs(50%, width);
  min-width: rem-calc(50%);
  font-size: 15px;
  height: 100px;
  margin-bottom: rem-calc(50px);
  margin-top: 8%;
}
.logo66 {
  @include rfs(14%, width);
  min-width: rem-calc(14%);
  font-size: 15px;
  height: 100px;
  margin-bottom: rem-calc(50px);
  margin-top: 8%;
}
.logo67 {
  @include rfs(14%, width);
  min-width: rem-calc(14%);
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
.text1 {
  .logo4 {
    @include rfs(7%, width);
    min-width: rem-calc(7%);
    @media (max-width: 1200px) {
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

.text3 {
  @include font-size(35px);
  margin-bottom: rem-calc(30px);
  font-weight: 700;
  line-height: divide(70, 50);
  margin-left: auto;
  margin-right: auto;
  max-width: em-calc(650, 40);
  margin-top: -5%;
  text-align: center;
  text-transform: uppercase;

  strong {
    color: $white;
  }
  span {
    color: $primary;
  }
}

.text4 {
  @include font-size(12px);
  margin-bottom: rem-calc(30px);
  font-weight: 100;
  line-height: divide(70, 50);
  margin-left: auto;
  margin-right: auto;
  max-width: em-calc(1250, 40);
  margin-top: 6%;
  text-align: center;

  strong {
    color: $white;
  }
  span {
    color: $primary;
  }
}

.text5 {
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
