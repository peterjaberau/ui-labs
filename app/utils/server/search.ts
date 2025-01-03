/**
 * GET Node.js URL search params
 * @param request
 * @param name
 * @returns
 */
export function getSearchParams(request: Request, name: string) {
  const r = new URL(request.url).searchParams.get(name);
  return r;
}

export function getSearchParamsPage(request: Request) {
  return Number(getSearchParams(request, "page") ?? 1);
}

export function getSearchParamsPageSize(request: Request) {
  return Number(getSearchParams(request, "pageSize") ?? 10);
}

class UrlSearchParams {
  /**
   * GET Node.js URL search params
   * @param request
   * @param name
   * @returns
   */
  getSearchParams(request: Request, name: string) {
    const r = new URL(request.url).searchParams.get(name);
    return r;
  }

  /**
   * Get url page parameters
   * @param request
   * @returns
   */
  getPage(request: Request) {
    return Number(getSearchParams(request, "page") ?? 1);
  }

  /**
   * Get url pageSize parameter
   * @param request
   * @returns
   */
  getPageSize(request: Request) {
    return Number(getSearchParams(request, "pageSize") ?? 10);
  }

  /**
   * Get url name parameter
   * @param request
   * @returns
   * */
  getName(request: Request) {
    return getSearchParams(request, "name");
  }

  /**
   * Get sorting parameters
   * @param request
   * @returns
   * */
  getSort(request: Request) {
    return getSearchParams(request, "sort");
  }

  /**
   * Get url categoryId parameter
   * @param request
   * @returns
   */
  getCategoryId(request: Request) {
    return Number(getSearchParams(request, "categoryId"));
  }

  /**
   * Get url tagId parameter
   * @param request
   * @returns
   */
  getTagId(request: Request) {
    return Number(getSearchParams(request, "tagId"));
  }
}

export const urlSearchParams = new UrlSearchParams();
