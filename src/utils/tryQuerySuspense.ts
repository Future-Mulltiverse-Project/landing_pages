import { showError } from '#app';

export async function tryQuerySuspense<Result>(
  suspense: () => Promise<Result>,
  silent?: boolean,
) {
  try {
    await suspense();
  } catch (e: any) {
    if (!silent) {
      throw showError({
        statusCode: e.response.status,
        statusMessage: e.response.data.message || e.response.statusText,
      });
    }
  }
}
