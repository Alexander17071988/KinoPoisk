import { configureStore } from '@reduxjs/toolkit';
import apiMovie from '@widgets/MovieCarousel/api/apiMovie';
import favoritesReducer from '@features/favoriteMovies/ui/favoriteMoviesSlice';

const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        [apiMovie.reducerPath]: apiMovie.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiMovie.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

