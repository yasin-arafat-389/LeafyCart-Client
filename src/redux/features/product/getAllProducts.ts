/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({
        category,
        sortBy,
        search,
        priceOrder,
        page = 1,
        limit = 6,
      }) => {
        const queryParams = new URLSearchParams();

        if (category) queryParams.append("category", category);
        if (sortBy) queryParams.append("sortBy", sortBy);
        if (search) queryParams.append("search", search);
        if (priceOrder) queryParams.append("priceOrder", priceOrder);
        queryParams.append("page", page.toString());
        queryParams.append("limit", limit.toString());

        return {
          url: `/products?${queryParams.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Products"],
    }),

    getAllProductsByCategory: builder.query({
      query: (category) => ({
        url: "/products",
        method: "GET",
        params: { category: category },
      }),
      providesTags: ["ProductsByCategory"],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),

    checkAvailabilityOfProduct: builder.mutation({
      query: (id) => ({
        url: `/products/check-availability`,
        method: "POST",
        params: { id: id },
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllProductsByCategoryQuery,
  useGetSingleProductQuery,
  useCheckAvailabilityOfProductMutation,
} = productsApi;
