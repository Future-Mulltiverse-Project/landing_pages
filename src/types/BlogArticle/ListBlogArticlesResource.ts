import { BlogArticle } from '~/types/BlogArticle/BlogArticle';
import { DefaultListResponse } from '~/types/DefaultListResponse';
import { Media } from '~/types/Media';

export type ListBlogArticlesResourceItem = Pick<
  BlogArticle,
  'id' | 'slug' | 'title' | 'description' | 'createdAt'
> & {
  image?: Media;
};

export type ListBlogArticlesResource = DefaultListResponse<
  ListBlogArticlesResourceItem[]
>;
