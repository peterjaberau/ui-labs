import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchQuery } from "../_base-query";
import { useSelector } from "react-redux";

/**
 * API service for user information.
 */
export const userInfo = createApi({
  reducerPath: "userInfo",
  baseQuery: fetchQuery,
  endpoints: (builder) => ({
    /**
     * Endpoint to get user information.
     * @returns {Object} The user information.
     */
    getUserInfo: builder.query({
      transformResponse: (data: any) => data?.data,
      query: () => ({ url: "userinfo" }),
      keepUnusedDataFor: 0,
    }),
  }),
});

/**
 * Hook to use the getUserInfo query.
 */
export const { useGetUserInfoQuery } = userInfo;

/**
 * Selector to get user information from the state.
 * @returns {Object} The user information from the state.
 */
export const useSelectUserInfo = () =>
  useSelector(
    (state: any) =>
      state?.userInfo?.queries?.['getUserInfo("")']?.data?.userInfo,
  );
