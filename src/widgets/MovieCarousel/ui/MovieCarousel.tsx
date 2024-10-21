import { useGetMoviesQuery } from "@widgets/Slice/apiSlice";
import movieImages from "@entities/MovieCarousel/model/moviesImages";
import { Movies } from "@entities/MovieCarousel/model/movies";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import UniversalCarousel from "@shared/ui/universalCarousel";

const MoviesCarousel: React.FC = () => {
    const { data: movies, isLoading } = useGetMoviesQuery('movies');

    const renderMovie = (movie: Movies) => (
        <Card key={movie.episode_id} style={{ margin: '0 5px' }}>
            <CardMedia
                component="img"
                height="300"
                image={movieImages[movie.title] || 'https://via.placeholder.com/300'}
                alt={movie.title}
            />
            <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                    Director: {movie.director}
                </Typography>
            </CardContent>
        </Card>
    );

    return (
        <UniversalCarousel
            data={movies}
            isLoading={isLoading}
            renderItem={renderMovie}
        />
    );
};

export default MoviesCarousel;