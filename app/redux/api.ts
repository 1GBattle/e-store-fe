import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryErrorHandling } from "@/app/redux/baseapi";

const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryErrorHandling,
  endpoints: (build) => ({}),
  tagTypes: ["Products"],
});

export default api;
