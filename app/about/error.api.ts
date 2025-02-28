import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryErrorHandling } from "@/app/redux/baseapi";

export const errorApi = createApi({
  reducerPath: "errorapi",
  baseQuery: baseQueryErrorHandling,
  endpoints: (builder) => ({
    get400Error: builder.query<void, void>({
      query: () => ({
        url: "buggy/bad-request",
      }),
    }),
    get401Error: builder.query<void, void>({
      query: () => ({
        url: "buggy/unauthorized",
      }),
    }),
    get404Error: builder.query<void, void>({
      query: () => ({
        url: "buggy/not-found",
      }),
    }),
    get500Error: builder.query<void, void>({
      query: () => ({
        url: "buggy/server-error",
      }),
    }),
    getValidationError: builder.query<void, void>({
      query: () => ({
        url: "buggy/validation-error",
      }),
    }),
  }),
});

export const {
  useLazyGet400ErrorQuery,
  useLazyGet401ErrorQuery,
  useLazyGetValidationErrorQuery,
  useLazyGet404ErrorQuery,
  useLazyGet500ErrorQuery,
} = errorApi;
