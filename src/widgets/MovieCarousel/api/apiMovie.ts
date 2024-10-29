import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesResponse } from "@entities/MovieCarousel/model/movies";

const baseUrl = 'https://swapi.dev/api/';

const api = createApi({
    reducerPath: 'apiMovie',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getItems: builder.query<MoviesResponse, unknown>({
            query: () => 'films/',
        }),
    }),
});

export const { useGetItemsQuery } = api;

export default api;