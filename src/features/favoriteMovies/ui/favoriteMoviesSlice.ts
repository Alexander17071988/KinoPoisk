import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movies } from "@entities/MovieCarousel/model/movies";
import { FavoritesMovies } from "@entities/favoriteMovies/model/favoriteMovies";

const initialState: FavoritesMovies = {
    favorites: [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Movies>) => {
            if (!state.favorites.find((movie) => movie.episode_id === action.payload.episode_id)) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter((movie) => movie.episode_id !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;