import React, { useState, useEffect } from "react";
import Slider from "react-slick"
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { getMatrixMovies } from "@entities/MatrixCarousel/api/matrixMovies";
import { MatrixMovies } from "@entities/MatrixCarousel/model/MatrixMovies";
import { carouselStyles } from "@shared/ui/carouselStyles";
import { settings } from "@shared/ui/settingsSliderMatrix";

const MatrixCarousel: React.FC = () => {

    const [matrixs, setMatrixs] = useState<MatrixMovies[]>([]);

    useEffect(() => {
        const fetchMatrix = async () => {
            const matrixData = await getMatrixMovies();
            setMatrixs(matrixData)
        };
        fetchMatrix();
    }, []);


    return (
        <div style={carouselStyles}>
            <Slider dots={settings.dots}
                infinite={settings.infinite}
                speed={settings.speed}
                slidesToShow={settings.slidesToShow}
                slidesToScroll={settings.slidesToScroll}
                responsive={settings.responsive}
            >
                {matrixs.map((matrix) => (
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

export default MatrixCarousel;