import { BlogArticle } from '~/types/BlogArticle/BlogArticle';
import { ListBlogCategoriesResource } from '~/types/BlogCategory/ListBlogCategoriesResource';
import { Media } from '~/types/Media';

export type ShowBlogArticleResource = Pick<
  BlogArticle,
  'id' | 'slug' | 'title' | 'description' | 'createdAt' | 'sections'
> & {
  image?: Media;
  categories?: ListBlogCategoriesResource[];
};
