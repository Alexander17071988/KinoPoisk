import React from "react";
import MovieCarousel from '@widgets/MovieCarousel/ui/MovieCarousel';
import FavoriteMovies from '@widgets/FavoriteMovies/FavoriteMovies';

const Home: React.FC = () => {
    return <>
        <MovieCarousel />
        <FavoriteMovies />
    </>
};

export default Home;