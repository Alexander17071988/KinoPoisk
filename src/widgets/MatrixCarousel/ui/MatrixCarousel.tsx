import { useGetItemsQuery } from "@widgets/MatrixCarousel/api/apiMatrix";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { settings } from "@features/MovieSlider/lib/const/settingsSliderMatrix";
import { carouselStyles } from "@shared/ui/carouselStyles";
import Slider from "react-slick";

const MatrixMoviesCarousel: React.FC = () => {
    const { data, isLoading, error } = useGetItemsQuery();

    console.log(data)

    if (isLoading) return <div>Загрузка</div>;

    if (error || !data) return <div>Произошла ошибка</div>

    return (
        <div style={carouselStyles}>
            <Slider dots={settings.dots}
                infinite={settings.infinite}
                speed={settings.speed}
                slidesToShow={settings.slidesToShow}
                slidesToScroll={settings.slidesToScroll}
                responsive={settings.responsive}
            >
                {data.map((matrix) => (
                    <Card key={matrix.id} style={{ margin: '0 5px' }}>
                        <CardMedia
                            component='img'
                            height='300'
                            image={matrix.poster.previewUrl || 'https://via.placeholder.com/300'}
                            alt={matrix.name} />
                        <CardContent>
                            <Typography variant="h6">{matrix.name}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Год выхода: {matrix.year}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}

            </Slider>
        </div>)
};

export default MatrixMoviesCarousel;