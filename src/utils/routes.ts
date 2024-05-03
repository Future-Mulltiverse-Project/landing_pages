import { RouteLocationNamedRaw } from 'vue-router';

export function toGuidebook() {
  return {
    name: 'guidebook',
  } as RouteLocationNamedRaw;
}

export type ToGuidebookCategory = {
  params: { categorySlug: string };
};

export function toGuidebookCategory(to: ToGuidebookCategory) {
  return {
    ...to,
    name: 'guidebook-categorySlug',
  } as RouteLocationNamedRaw;
}

export type ToGuidebookCategoryArticle = {
  params: { categorySlug: string; articleSlug: string };
};

export function toGuidebookCategoryArticle(to: ToGuidebookCategoryArticle) {
  return {
    ...to,
    name: 'guidebook-categorySlug-articleSlug',
  } as RouteLocationNamedRaw;
}
