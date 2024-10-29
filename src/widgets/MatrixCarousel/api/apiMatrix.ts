import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movies } from "@entities/MovieCarousel/model/movies";

const baseUrl = 'https://swapi.dev/api/';

const api = createApi({
    reducerPath: 'apiMatrix',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getItems: builder.query<Movies[], void>({
            query: () => 'people',
        }),
    }),
});

export const { useGetItemsQuery } = api;

export default api;