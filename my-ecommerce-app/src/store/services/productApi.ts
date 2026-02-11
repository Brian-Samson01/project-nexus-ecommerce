import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
  endpoints: (builder) => ({
    // Fetch products with pagination (offset and limit)
    getProducts: builder.query<Product[], { offset: number; limit: number }>({
      query: ({ offset, limit }) => `products?offset=${offset}&limit=${limit}`,
      // Merge strategy for infinite scroll
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
    // Fetch single product for the Details screen
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;