import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@app/store';
import { Box, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import moviesImages from "@entities/MovieCarousel/model/moviesImages";
import { removeFavorite } from "@features/favoriteMovies/ui/favoriteMoviesSlice";
import DeleteIcon from "@mui/icons-material/Delete";

const FavoriteMovies: React.FC = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.favorites);

    const handleRemoveFavorite = (movieId: number) => {
        dispatch(removeFavorite(movieId));
    };

    if (favorites.length === 0) {
        return <p>Нет избранных фильмов</p>
    }

    return (
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
            {favorites.map((movie) => (
                <Box key={movie.episode_id}>
                    <Card>
                        <CardMedia
                            component='img'
                            height='300'
                            image={moviesImages[movie.title] || 'https://via.placeholder.com/300'}
                            alt={movie.title} />
                        <CardContent>
                            <h3>{movie.title}</h3>
                            <IconButton onClick={() => handleRemoveFavorite(movie.episode_id)}>
                                <DeleteIcon />
                            </IconButton>
                        </CardContent>
                    </Card>
                </Box>
            ))
            }
        </Box >
    )
}

export default FavoriteMovies;
