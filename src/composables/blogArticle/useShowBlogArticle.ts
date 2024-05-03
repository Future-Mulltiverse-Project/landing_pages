import { useQuery, UseQueryOptions } from '@tanstack/vue-query';
import { AxiosRequestConfig } from 'axios';
import { useApi } from '~/composables/useApi';
import { BlogArticle } from '~/types/BlogArticle/BlogArticle';
import { ShowBlogArticleResource } from '~/types/BlogArticle/ShowBlogArticleResource';
import { tryQuerySuspense } from '~/utils/tryQuerySuspense';

type ShowBlogArticleRequestConfig = AxiosRequestConfig & {
  params: { articleSlug: BlogArticle['slug'] };
};

export const showBlogArticleQueryKey = (
  params: ShowBlogArticleRequestConfig['params'],
) => ['showBlogArticle', params];

export const listBlogArticlesQueryOptions = (
  config: ShowBlogArticleRequestConfig,
): UseQueryOptions<ShowBlogArticleResource> => ({
  queryKey: showBlogArticleQueryKey(config.params),
  queryFn: () =>
    useApi({
      ...config,
      url: '/api/blog/articles/show',
    }).then((r) => r.data),
});

export async function useShowBlogArticle(config: ShowBlogArticleRequestConfig) {
  const { suspense, ...query } = useQuery(listBlogArticlesQueryOptions(config));

  await tryQuerySuspense(suspense);

  return query;
}
