export type DefaultListResponse<T> = {
  data: T;
  meta: {
    currentPage: number;
    perPage: number;
    pages: number;
    total: number;
  };
};
