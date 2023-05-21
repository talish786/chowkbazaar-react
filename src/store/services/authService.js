import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the auth API service
const authService = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pink-aware-bunny.cyclic.app/api/' }),
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (LoginData) => ({
        url: 'login',
        method: 'POST',
        body: LoginData,
      }),
    }),
  }),
});

// Export the mutation hook for authLogin
export const { useAuthLoginMutation } = authService;

// Export the generated authService object
export default authService;
