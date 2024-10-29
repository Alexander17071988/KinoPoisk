import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movies } from "@entities/MovieCarousel/model/movies";

const baseUrl = 'https://swapi.dev/api/';

const api = createApi({
    reducerPath: 'apiMovie',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getItems: builder.query<Movies[], void>({
            query: () => 'films/',
        }),
        getItemById: builder.query<Movies, string>({
            query: (id) => `films/${id}`,
        }),
    }),
});

export const { useGetItemsQuery, useGetItemByIdQuery } = api;

export default api;