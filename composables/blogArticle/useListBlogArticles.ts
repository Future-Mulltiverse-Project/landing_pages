import { useQuery, UseQueryOptions } from '@tanstack/vue-query';
import { useApi } from '~/composables/useApi';
import { ListBlogArticlesResource } from '~/types/BlogArticle/ListBlogArticlesResource';
import { tryQuerySuspense } from '~/utils/tryQuerySuspense';

export const listBlogArticlesQueryKey = () => ['listBlogArticles'];

export const listBlogArticlesQueryOptions =
  (): UseQueryOptions<ListBlogArticlesResource> => ({
    queryKey: listBlogArticlesQueryKey(),
    queryFn: () =>
      useApi({
        url: '/api/blog/articles',
      }).then((r) => r.data),
  });

export async function useListBlogArticles() {
  const { suspense, ...query } = useQuery(listBlogArticlesQueryOptions());

  await tryQuerySuspense(suspense);

  return query;
}
