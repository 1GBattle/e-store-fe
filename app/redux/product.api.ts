import api from "./api";
import { BaseQueryArg } from "@reduxjs/toolkit/query";
import { Product } from "@/app/Models/Product.Model";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
    getProductDetails: builder.query<Product, number>({
      query: (id: number) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productApi;
