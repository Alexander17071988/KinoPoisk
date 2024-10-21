import Slider from "react-slick";
import { carouselStyles } from "@shared/ui/carouselStyles";
import { settings } from "@features/MovieSlider/lib/const/settingsSliderMatrix";
import { UniversalCarouselProps } from "@entities/movie/model/movie";

const UniversalCarousel = <T,>({ data, isLoading, renderItem }: UniversalCarouselProps<T>) => {
    if (isLoading) return <div>Загрузка</div>;

    return (
        <div style={carouselStyles}>
            <Slider
                dots={settings.dots}
                infinite={settings.infinite}
                speed={settings.speed}
                slidesToShow={settings.slidesToShow}
                slidesToScroll={settings.slidesToScroll}
                responsive={settings.responsive}
            >
                {data.map(renderItem)}
            </Slider>
        </div>
    );
};

export default UniversalCarousel;