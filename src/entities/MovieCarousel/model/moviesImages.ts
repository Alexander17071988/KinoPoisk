import oneMovie from '@entities/MovieCarousel/ui/1.jpg';
import twoMovie from '@entities/MovieCarousel/ui/2.jpg';
import threeMovie from '@entities/MovieCarousel/ui/3.jpg';
import fourMovie from '@entities/MovieCarousel/ui/4.jpg';
import fiveMovie from '@entities/MovieCarousel/ui/5.jpg';
import sixMovie from '@entities/MovieCarousel/ui/6.jpg';

const movieImages: { [key: string]: string } = {
    'A New Hope': oneMovie,
    'The Empire Strikes Back': twoMovie,
    'Return of the Jedi': threeMovie,
    'The Phantom Menace': fourMovie,
    'Attack of the Clones': fiveMovie,
    'Revenge of the Sith': sixMovie,
};

export default movieImages;