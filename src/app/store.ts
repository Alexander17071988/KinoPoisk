import { configureStore } from '@reduxjs/toolkit';
import apiMatrix from '@widgets/MatrixCarousel/api/apiMatrix';
import apiMovie from '@widgets/MovieCarousel/api/apiMovie';

const store = configureStore({
    reducer: {
        [apiMatrix.reducerPath]: apiMatrix.reducer,
        [apiMovie.reducerPath]: apiMovie.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiMatrix.middleware).concat(apiMovie.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

