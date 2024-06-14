import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainBanner from '../MainBanner/MainBanner';

const MainCarousel = ({ movies }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 6000,
        pauseOnHover: true
    };

    return (
        <Slider {...settings} className={'main-slider'}>
            {movies.map((movie, index) => (
                <MainBanner key={index} movie={movie} />
            ))}
        </Slider>
    );
};

export default MainCarousel;