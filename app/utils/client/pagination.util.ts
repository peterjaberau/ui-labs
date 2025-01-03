import { type Observable, of } from "rxjs";

type IPagination = {
  page?: number;
  pageSize?: number;
  name?: string;
  role?: string;
};

/**
* Get pagination related parameters
 * @param request request object
 * @returns Pagination {IPagination}
 */
export function getPaginationByRequest(request: Request): IPagination {
  let { searchParams } = new URL(request.url);
  let page = Number(searchParams.get("page") ?? 1);
  let pageSize = Number(searchParams.get("pageSize") ?? 10);
  let name = searchParams.get("name") ?? "";
  let role = searchParams.get("role") ?? "";

  return { page, pageSize, name, role };
}

/**
* Get pagination related parameters
 * @param request request object
 * @returns Pagination {IPagination}
 */
export function getPaginationByRequest$(
  request: Request,
): Observable<IPagination> {
  let { searchParams } = new URL(request.url);
  let page = Number(searchParams.get("page") ?? 1);
  let pageSize = Number(searchParams.get("pageSize") ?? 10);
  let name = searchParams.get("name") ?? "";

  return of({ page, pageSize, name });
}
