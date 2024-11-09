import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movies } from "@entities/MovieCarousel/model/movies";
import { FavoritesMovies } from "@entities/favoriteMovies/model/favoriteMovies";

const loadFavoritesFromLocalStorage = (): Movies[] => {
    try {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
    catch (error) {
        console.error('Ошибка загрузки данных из LocalStorage', error);
        return [];
    }
};

const initialState: FavoritesMovies = {
    favorites: loadFavoritesFromLocalStorage(),
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Movies>) => {
            if (!state.favorites.find((movie) => movie.episode_id === action.payload.episode_id)) {
                state.favorites.push(action.payload);
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
            }
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter((movie) => movie.episode_id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;