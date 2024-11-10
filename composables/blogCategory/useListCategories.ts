import { useQuery, UseQueryOptions } from '@tanstack/vue-query';
import { AxiosRequestConfig } from 'axios';
import { useApi } from '~/composables/useApi';
import { ListBlogCategoriesResource } from '~/types/BlogCategory/ListBlogCategoriesResource';
import { tryQuerySuspense } from '~/utils/tryQuerySuspense';

export const listBlogCategoriesQueryKey = () => ['listBlogCategories'];

type ListBlogCategoriesRequestConfig = AxiosRequestConfig & {
  params?: { articles?: boolean };
};

export const listCategoriesQueryOptions = (
  config?: ListBlogCategoriesRequestConfig,
): UseQueryOptions<ListBlogCategoriesResource> => ({
  queryKey: listBlogCategoriesQueryKey(),
  queryFn: () =>
    useApi({
      ...config,
      url: '/api/blog/categories',
    }).then((r) => r.data),
});

export async function useListCategories(
  config?: ListBlogCategoriesRequestConfig,
) {
  const { suspense, ...query } = useQuery(listCategoriesQueryOptions(config));

  await tryQuerySuspense(suspense);

  return query;
}
