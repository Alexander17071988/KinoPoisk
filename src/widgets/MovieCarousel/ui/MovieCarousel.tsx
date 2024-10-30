import { useGetItemsQuery } from "@widgets/MovieCarousel/api/apiMovie";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import moviesImages from '@entities/MovieCarousel/model/moviesImages';
import Slider from 'react-slick';
import { settings } from '@features/MovieSlider/lib/const/settingsSlider';
import { carouselStyles } from "@shared/ui/carouselStyles";
import { Movies } from "@entities/MovieCarousel/model/movies";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@app/store';
import { addFavorite, removeFavorite } from "@features/favoriteMovies/ui/favoriteMoviesSlice";

const MoviesCarousel: React.FC = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetItemsQuery('movies');
    const favorites = useSelector((state: RootState) => state.favorites.favorites);

    const isFavorite = (movieId: number) => favorites.some((movie) => movie.episode_id === movieId);

    const handleFavoriteClick = (movie: Movies) => {
        if (isFavorite(movie.episode_id)) {
            dispatch(removeFavorite(movie.episode_id));
        } else {
            dispatch(addFavorite(movie));
        }
    }

    if (isLoading) {
        return <div>Загрузка</div>
    };

    if (error || !data) {
        return <div>Произошла ошибка</div>
    };

    return (
        <div style={carouselStyles}>
            <Slider dots={settings.dots}
                infinite={settings.infinite}
                speed={settings.speed}
                slidesToShow={settings.slidesToShow}
                slidesToScroll={settings.slidesToScroll}
                responsive={settings.responsive}
            >
                {data.results.map((movies: Movies) => (
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
                            <Button onClick={() => handleFavoriteClick(movies)}>{isFavorite(movies.episode_id) ? 'Сердечко красное' : 'Сердечко серое'}</Button>
                        </CardContent>
                    </Card>
                ))}

            </Slider>
        </div>
    );
};

export default MoviesCarousel;