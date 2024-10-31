import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseURL } from '../../../utils/authUtils'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${getBaseURL}/api/v1/product`,
    credentials: 'include',
}),
tagTypes: ['Products'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ( {category, minPrice, maxPrice, color, page = 1, limit = 10} ) => {
        const  queryParams = new URLSearchParams({
            category: category || " ",
            color: color || " ",
            minPrice: minPrice || 0,
            maxPrice: maxPrice || " ",
            page: page.toString(),
            limit: limit.toString(),
        }).toString();
        return {
          url: `/all-products?${queryParams}`,
          method: 'GET',
        }
      },
      providesTags: ['Products'],
    }),
  }),
})


export const { useGetAllProductsQuery } = productApi