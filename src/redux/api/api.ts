import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-management-server-lyart-mu.vercel.app",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (name) => {
        return {
          url: `/users`,
          method: "GET",
          params: { name },
        };
      },
      providesTags: ["user"],
    }),
    addUser: builder.mutation({
      query: (data) => {
        return {
          url: "/user",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (options) => {
        return {
          url: `/user/${options?.id}`,
          method: "PUT",
          body: options?.data,
        };
      },
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/user/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = baseApi;
