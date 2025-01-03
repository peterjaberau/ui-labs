import dayjs from "dayjs";
import { of } from "rxjs";

/**
 * noop empty function
 */
export function noop() {}

/**
 * identity 返回值
 * @param value {any}
 * @returns
 */
export function identity<T>(value: T): T {
  return value;
}

/**
 * format string
 * @param time format time
 * @param format format syntax
 * @returns
 */
export function formatDate(time: string, format = "YYYY-MM-DD HH:mm:ss") {
  return dayjs(time).format(format);
}

/**
 * Generate antd file list fileList based on name
 * @param name
 * @returns
 */
export function genFileListByName(name: string) {
  if (!name) {
    return [];
  }
  return [
    {
      uid: "uid",
      name,
      status: "done",
      url: name,
      response: {
        data: {
          name,
        },
      },
    },
  ];
}

/**
 * Get the file suffix from url (does not support including parameters)
 * @param str
 * @returns
 */
export function extname(str: string) {
  var slug = str.split(/\/|\\/).slice(-1)[0];
  var idx = slug.lastIndexOf(".");
  if (idx <= 0) return "";
  var ext = slug.slice(idx);
  return ext;
}

/**
 * Get Node.js URL search params
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

/**
 * GET Node.js URL search params
 * @param request
 * @param name
 * @returns
 */
export function getSearchParams$(request: Request, name: string) {
  const r = new URL(request.url).searchParams.get(name);
  return of(r);
}

export function requestToSearchParamsObj(request: Request) {
  const obj: any = {};
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  searchParams.forEach((value, key) => {
    obj[`${key}`] = value;
  });

  return obj;
}
