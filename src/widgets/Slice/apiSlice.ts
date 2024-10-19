import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react'
import { getMovies } from '@entities/MovieCarousel/api/swapi'
import { getMatrixMovies } from '@entities/MatrixCarousel/api/matrixMovies';
import { AxiosError } from 'axios';

const axiosBaseQuery: BaseQueryFn<{ type: 'movies' | 'matrix' | 'moviesID' | 'matrixID' }, unknown, unknown> = async ({ type }) => {
    try {
        let result;
        if (type === 'movies') {
            result = await getMovies();
        } else if (type === 'matrix') {
            result = await getMatrixMovies();
        }
        return { data: result };

    } catch (error) {
        const err = error as AxiosError;
        return {
            error: {
                status: err.response?.status,
                data: err.response?.data || err.message,
            },
        };
    }
};

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery,
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => ({ type: 'movies' }),
        }),
        getMatrix: builder.query({
            query: () => ({ type: 'matrix' }),
        }),
    }),
});

export const { useGetMoviesQuery, useGetMatrixQuery } = apiSlice;


