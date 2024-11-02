import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseURL } from '../../../utils/authUtils'

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/v1/review`,
    credentials: 'include',
  }),
  tagTypes: ['Reviews'],
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (reviewData) => ({
        url: `/create-review`,
        method: 'POST',
        body: reviewData,
      }),
      invalidatesTags: ['Reviews'],
    }),
    getReviewCount: builder.query({
      query: () => ({
        url: "/count-review",
        method: 'GET',
      }),
      providesTags: ['Reviews'],
    }),
    getReviewByUserId: builder.query({
      query: (userId) => ({
        url: `/${userId}`,
        method: 'GET',
      }),
      providesTags: (result) => result ? [{ type: 'Reviews', id: result[0]?.email }] : [],
    }),
  }),
})

export const {
  useCreateReviewMutation,
  useGetReviewCountQuery,
  useGetReviewByUserIdQuery,
} = reviewApi