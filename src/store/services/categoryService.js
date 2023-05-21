import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the auth API service
const categoryService = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pink-aware-bunny.cyclic.app/api/",
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.authReducer?.adminToken;
      console.log(token);
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (categoryData) => ({
        url: "create-category",
        method: "POST",
        body: categoryData,
      }),
    }),
  }),
});

// Export the mutation hook for authLogin
export const { useCreateMutation } = categoryService;

// Export the generated categoryService object
export default categoryService;
