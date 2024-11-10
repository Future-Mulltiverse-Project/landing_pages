import { useRequestHeaders, useRuntimeConfig } from '#app';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

let api: AxiosInstance | undefined;

export function useApi<T = any, R = AxiosResponse<T>, D = any>(
  config: AxiosRequestConfig,
) {
  if (!api) {
    const {
      public: { API_URL },
    } = useRuntimeConfig();

    api = axios.create({
      baseURL: API_URL,
      withCredentials: true,
    });

    // api.interceptors.response.use(
    //   function (response) {
    //     // Any status code that lie within the range of 2xx cause this function to trigger
    //     // Do something with response data
    //     return response;
    //   },
    //   function (error: AxiosError) {
    //     if (
    //       error.response?.status === 401 &&
    //       error.config?.url !== AUTH_USER_ENDPOINT
    //     ) {
    //       return navigateTo(toSignIn());
    //     }
    //
    //     return Promise.reject(error);
    //   },
    // );
  }

  if (process.server) {
    const headers = useRequestHeaders();

    config = {
      ...config,
      headers: {
        ...config.headers,
        ...headers,
        origin: headers.host,
        accept: 'application/json',
        // Don't accept brotli encoding because Node can't parse it
        // https://github.com/nuxt-community/axios-module/blob/main/lib/plugin.js#L223
        'Accept-Encoding': 'gzip, deflate',
      },
    };
  }

  return api.request<T, R, D>(config);
}
