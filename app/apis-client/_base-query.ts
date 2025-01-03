import * as eventTypes from "@/utils/event/event-type";
import type { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";
import { defaultLang } from "@/config/lang";
import { eventCenter } from "@/utils/event";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { simpleStorage } from "@/libs/simpleStorage";

/**
 * Class to manage request queue and handle token refresh logic.
 */
class RequestQueue {
  isRefreshing = false;
  requestQueue: any[] = [];
  JOSE_ERROR_EXP = '"exp" claim timestamp check failed';

  /**
   * Processes the request queue, resolving or rejecting promises based on the error.
   * @param {any} error - The error to reject the promises with.
   * @param {string|null} token - The token to resolve the promises with.
   */
  processQueue = (error: any, token = null) => {
    this.requestQueue.forEach((promise) => {
      if (error) {
        promise.reject(error);
      } else {
        promise.resolve(token);
      }
    });
    this.requestQueue.length = 0;
  };
}

const rq = new RequestQueue();

const _fetchQuery = fetchBaseQuery({
  baseUrl: "/api",
  prepareHeaders: (headers) => {
    const token = simpleStorage.getToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

/**
 * Function to refresh the token and retry the original request.
 * @param {string|FetchArgs} args - The original request arguments.
 * @param {BaseQueryApi} api - The API object.
 * @param {any} extraOptions - Additional options for the request.
 */
async function qureyRefreshAndRetry(
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: any,
) {
  rq.isRefreshing = true;
  // Refresh token request
  let result = await _fetchQuery(
    {
      url: "refresh_token",
      method: "POST",
      body: JSON.stringify({ refresh_token: simpleStorage.getRefreshToken() }),
    },
    api,
    extraOptions,
  );
  rq.isRefreshing = false;

  const { data, code, message } = result.data as any;

  if (code === 0) {
    simpleStorage.setToken(data.token);
    simpleStorage.setRefreshToken(data.refresh_token);
    rq.processQueue(null, data.token);
  } else {
    rq.processQueue({ message });
  }
}

/**
 * Redirects the user to the login page with the current language.
 */
function redirectToLiginWithLang() {
  const lang = window.location.pathname.split("/")[1] || defaultLang;
  window.location.replace(`/${lang}/admin/login`);
}

/**
 * Function to fetch data with token refresh logic.
 * @param {string|FetchArgs} args - The request arguments.
 * @param {BaseQueryApi} api - The API object.
 * @param {any} extraOptions - Additional options for the request.
 * @returns {Promise<any>} - The result of the fetch query.
 */
export const fetchQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: any,
) => {
  let result = await _fetchQuery(args, api, extraOptions);
  const { code, message } = (result?.data || {}) as any;
  if (code !== 0 && message === rq.JOSE_ERROR_EXP) {
    const refreshToken = simpleStorage.getRefreshToken();
    if (!refreshToken) {
      redirectToLiginWithLang();
      return result;
    }

    if (!rq.isRefreshing) {
      qureyRefreshAndRetry(args, api, extraOptions).catch((error) => {
        rq.isRefreshing = false;
        eventCenter.emit(
          eventTypes.USER_AUTHORIZED,
          error.response?.data?.message,
        );
        redirectToLiginWithLang();
        rq.processQueue(error);
      });
    }
    const retryOriginalRequest = new Promise((resolve, reject) => {
      rq.requestQueue.push({ resolve, reject });
    });

    return retryOriginalRequest.then((token) => {
      return _fetchQuery(args, api, extraOptions);
    });
  }
  return result;
};
