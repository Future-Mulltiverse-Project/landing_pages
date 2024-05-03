import { RouteLocationNormalizedLoaded } from 'vue-router';
import { useRoute } from '#app';

export function useTypedRoute<
  QueryT extends Record<string, any> = Record<string, any>,
>() {
  const route = useRoute();

  return route as RouteLocationNormalizedLoaded & QueryT;
}
