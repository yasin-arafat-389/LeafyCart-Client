/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (payload) => ({
        url: "/products/create-order",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Products", "ProductsByCategory"],
    }),
  }),
});

export const { usePlaceOrderMutation } = orderApi;
