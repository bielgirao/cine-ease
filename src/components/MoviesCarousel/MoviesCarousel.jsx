import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../MovieCard/MovieCard';



const MoviesCarousel = ({ movies, type }) => {

    const settings = {
        spaceBetween: 20,
        slidesPerView: 1.1,
        speed: 800,
        loop: true,
        breakpoints: {
            350: {
                slidesPerView: 1.2,
            },
            390: {
                slidesPerView: 1.4,
            },
            450: {
                slidesPerView: 1.6,
            },
            520: {
                slidesPerView: 1.8,
            },
            580: {
                slidesPerView: 2.2,
            },
            640: {
                slidesPerView: 2.4,
            },
            768: {
                slidesPerView: 2.8,
            },
            850: {
                slidesPerView: 3.3,
            },
            1024: {
                slidesPerView: 3.8,
            },
            1140: {
                slidesPerView: 4.2,
            },
            1280: {
                slidesPerView: 4.8,
            },
            1440: {
                slidesPerView: 5.4,
            },
            1600: {
                slidesPerView: 6,
            },
            1750: {
                slidesPerView: 6.4,
            },
            1920: {
                slidesPerView: 6.8,
            },
            2260: {
                slidesPerView: 7.8,
            },
            2520: {
                slidesPerView: 8.8,
            },
        }
    };

    return (
        <Swiper {...settings}>
            {movies.map((movie, index) => (
                <SwiperSlide key={index}>
                    <MovieCard movie={movie} type={type}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MoviesCarousel;