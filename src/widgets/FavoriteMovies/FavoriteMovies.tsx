import React from "react";
import { useSelector } from "react-redux";
import { RootState } from '@app/store';
import { Card, CardMedia, CardContent } from "@mui/material";
import moviesImages from "@entities/MovieCarousel/model/moviesImages";

const FavoriteMovies: React.FC = () => {
    const favorites = useSelector((state: RootState) => state.favorites.favorites);

    if (favorites.length === 0) {
        return <p>Нет избранных фильмов</p>
    }

    return (
        <div>
            {favorites.map((movie) => (
                <Card key={movie.episode_id}>
                    <CardMedia
                        component='img'
                        height='300'
                        image={moviesImages[movie.title] || 'https://via.placeholder.com/300'}
                        alt={movie.title} />
                    <CardContent>
                        <h3>{movie.title}</h3>
                    </CardContent>
                </Card>
            ))
            }
        </div>
    )
}

export default FavoriteMovies;
