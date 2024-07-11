/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: "/products/delete-product",
        method: "DELETE",
        params: { id: id },
      }),
      invalidatesTags: ["Products", "ProductsByCategory"],
    }),
  }),
});

export const { useDeleteProductMutation } = productsApi;
