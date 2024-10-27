import { useGetItemsQuery, useGetItemByIdQuery } from "@widgets/MovieCarousel/api/apiMovie";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Movies } from "@entities/MovieCarousel/model/movies";
import moviesImages from '@entities/MovieCarousel/model/moviesImages';

const MoviesCarousel: React.FC = () => {
    const { data: movies = [], isLoading } = useGetItemsQuery();

    const renderMovie = (movies: Movies) => (
        <Card key={movies.episode_id} style={{ margin: '0 5px' }}>
            <CardMedia
                component='img'
                height='300'
                image={moviesImages[movies.title] || 'https://via.placeholder.com/300'}
                alt={movies.title}
            />
            <CardContent>
                <Typography variant="h6">{movies.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                    Режиссер: {movies.director}
                </Typography>
            </CardContent>
        </Card>
    );

    return (
        <></>
    );
};

export default MoviesCarousel;