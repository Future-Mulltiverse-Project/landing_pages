import { ListBlogArticlesResourceItem } from '~/types/BlogArticle/ListBlogArticlesResource';
import { BlogCategory } from '~/types/BlogCategory/BlogCategory';
import { DefaultListResponse } from '~/types/DefaultListResponse';
import { Media } from '~/types/Media';

export type ListBlogCategoriesResourceItem = Pick<
  BlogCategory,
  'id' | 'slug' | 'title' | 'subtitle' | 'description'
> & {
  image?: Media;
  articles?: ListBlogArticlesResourceItem[];
};

export type ListBlogCategoriesResource = DefaultListResponse<
  ListBlogCategoriesResourceItem[]
>;
