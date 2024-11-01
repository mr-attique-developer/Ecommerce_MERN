import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseURL } from '../../../utils/authUtils'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/v1/product`,
    credentials: 'include',
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ category, minPrice, maxPrice, color, page = 1, limit = 10 }) => {
        const queryParams = new URLSearchParams({
          category: category || "",
          color: color || "",
          minPrice: minPrice || 0,
          maxPrice: maxPrice || "",
          page: page.toString(),
          limit: limit.toString(),
        }).toString();
        console.log('Query Params:', queryParams); // Debugging log
        return {
          url: `/all-products?${queryParams}`,
          method: 'GET',
        }
      },
      providesTags: ['Products'],
    }),
    getSingleProductById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Products', id }],
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: `/create-product`,
        method: 'POST',
        body: product,
        credentials: 'include',
      }),
      invalidatesTags: ['Products']
    }),
    fetchRelatedProducts: builder.query({
      query: (id) => `/related-product/${id}`,
      providesTags: ['Products']
    }),
    updateProductById: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/update-product/${id}`,
        method: 'PATCH',
        body: rest,
        credentials: 'include',
      }),
      invalidatesTags: ['Products']
    }),
    deleteProductById: builder.mutation({
      query: (id) => ({
        url: `/delete-product/${id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: (result,error,id)=>[{type: "Products", id}]
  }),
  }),
})


export const { useGetAllProductsQuery, useGetSingleProductByIdQuery,useFetchRelatedProductsQuery,useUpdateProductByIdMutation,useDeleteProductByIdMutation , useCreateProductMutation} = productApi