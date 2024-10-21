import { useGetMatrixQuery } from "@widgets/Slice/apiSlice";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import UniversalCarousel from "@shared/ui/universalCarousel";
import { MatrixMovies } from "@entities/MatrixCarousel/model/MatrixMovies";

const MatrixMoviesCarousel: React.FC = () => {
    const { data: matrixMovies, isLoading } = useGetMatrixQuery('matrix');

    const renderMatrixMovie = (matrix: MatrixMovies) => (
        <Card key={matrix.id} style={{ margin: '0 5px' }}>
            <CardMedia
                component='img'
                height='300'
                image={matrix.poster.previewUrl || 'https://via.placeholder.com/300'}
                alt={matrix.name}
            />
            <CardContent>
                <Typography variant="h6">{matrix.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                    Год выхода: {matrix.year}
                </Typography>
            </CardContent>
        </Card>
    );

    return (
        <UniversalCarousel
            data={matrixMovies}
            isLoading={isLoading}
            renderItem={renderMatrixMovie}
        />
    );
};

export default MatrixMoviesCarousel;