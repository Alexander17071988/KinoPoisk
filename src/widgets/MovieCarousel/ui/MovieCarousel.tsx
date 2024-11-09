import { useGetItemsQuery } from "@widgets/MovieCarousel/api/apiMovie";
import { Card, CardMedia, CardContent, Typography, IconButton, TextField } from "@mui/material";
import moviesImages from '@entities/MovieCarousel/model/moviesImages';
import Slider from 'react-slick';
import { settings } from '@features/MovieSlider/lib/const/settingsSlider';
import { carouselStyles } from "@shared/ui/carouselStyles";
import { Movies } from "@entities/MovieCarousel/model/movies";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@app/store';
import { addFavorite, removeFavorite } from "@features/favoriteMovies/ui/favoriteMoviesSlice";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useState } from "react";

const MoviesCarousel: React.FC = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetItemsQuery('movies');
    const favorites = useSelector((state: RootState) => state.favorites.favorites);

    const [searchQuery, setSearchQuery] = useState<string>('');

    const isFavorite = (movieId: number) => favorites.some((movie) => movie.episode_id === movieId);

    const handleFavoriteClick = (movie: Movies) => {
        if (isFavorite(movie.episode_id)) {
            dispatch(removeFavorite(movie.episode_id));
        } else {
            dispatch(addFavorite(movie));
        }
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredMovies = data?.results.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    if (isLoading) {
        return <div>Загрузка</div>
    };

    if (error || !data) {
        return <div>Произошла ошибка</div>
    };

    const slidesToShow = filteredMovies.length < 1 ? 1 : settings.slidesToShow;

    return (
        <div style={carouselStyles}>
            <TextField
                label='Поиск по названию'
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
                margin="normal"
                sx={{
                    backgroundColor: '#fff', '& .MuiInputBase-root': {
                        color: '#000',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#fff',
                    }
                }}
            />
            <Slider dots={settings.dots}
                infinite={settings.infinite}
                speed={settings.speed}
                slidesToShow={settings.slidesToShow}
                slidesToScroll={settings.slidesToScroll}
                responsive={settings.responsive}
            >
                {filteredMovies.map((movies: Movies) => (
                    <Card key={movies.episode_id} style={{ margin: '0 5px' }}>
                        <CardMedia
                            component='img'
                            height='300'
                            image={moviesImages[movies.title] || 'https://via.placeholder.com/300'}
                            alt={movies.title} />
                        <CardContent>
                            <Typography variant="h6">{movies.title}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Режиссер: {movies.director}
                            </Typography>
                            <IconButton onClick={() => handleFavoriteClick(movies)}>{isFavorite(movies.episode_id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}</IconButton>
                        </CardContent>
                    </Card>
                ))}

            </Slider>
        </div>
    );
};

export default MoviesCarousel;