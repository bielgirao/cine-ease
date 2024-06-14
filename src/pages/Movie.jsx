import Header from '../components/Header/Header.jsx'
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from '../services/api.js';
import CastCarousel from '../components/CastCarousel/CastCarousel.jsx';
import { extractYear, formatRating, extractDirector, formatReleaseDate, extractTrailer } from '../utils/formatter.js';
import { FaStar } from 'react-icons/fa';
import Button from '../components/ui/Button/Button.jsx'
import styles from '../styles/movie.module.scss';

const Movie = () => {
    const [movieData, setMovieData] = useState({});

    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();  
    const queryParams = new URLSearchParams(location.search);

    const time = queryParams.get('time');
    const type = queryParams.get('type');

    const fetchMovieData = async () => {
        try {
            setMovieData({});
            const response = await getMovieById(id);
            setMovieData(response)
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleTrailerClick = () => {
        window.open(extractTrailer(movieData.videos.results), '_blank')
    }

    useEffect(() => {    
        fetchMovieData();
    }, []);  
  
    return (
        <>
            <Header />
            {movieData && (
                <>
                    <div className={styles.bannerWrapper}>
                        <img 
                        src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`} 
                        alt={movieData.title} 
                        className={styles.movieBanner}
                        />
                        <div className={styles.bannerOverlay} />
                    </div>
                    <div className={styles.movieContent}>
                            <div className={styles.movieMainInfo}>
                                <h1>{movieData.title}</h1>
                                <p>{movieData.tagline}</p>
                                <div className={styles.movieSecondaryInfo}>
                                    <span className={styles.movieRating}>
                                        <FaStar size={10}/>
                                        {formatRating(movieData.vote_average)}
                                    </span>
                                    {movieData.release_date && <span>{extractYear(movieData.release_date)}</span>}
                                    <span>{movieData.runtime}m</span>
                                    {movieData.genres && (
                                        <span className={styles.movieGenres}>{movieData.genres.map((genre, index) => {
                                            return (index <= 1 && <span key={genre.id} className={styles.movieGenre}>{genre.name}</span>)}
                                        )}</span>
                                    )}
                                    <Button color='secondary' label={'► Watch Trailer'} size='small' handleBtnClick={() => handleTrailerClick()}/>
                                </div>
                            </div>

                            <div className={styles.movieOverview}>
                                <img 
                                    src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`} 
                                    alt={movieData.title} 
                                    className={styles.movieBanner}
                                />  
                                <div className={styles.overviewContent}>
                                    <p>{movieData.overview}</p>
                                    <p><b>Director:</b>  
                                        {movieData.credits && movieData.credits.crew && (<span> {extractDirector(movieData.credits.crew)}</span>)}
                                    </p>
                                    <p><b>Release Date:</b> {movieData.release_date && <span>{formatReleaseDate(movieData.release_date)}</span>}</p>
                                    <p><b>Duration:</b> {movieData.runtime} minutes</p>
                                </div>     
                            </div>                

                            <div className={styles.movieCasting}>
                                <h3 className='sectionTitle'>Movie Cast</h3>
                                {movieData.credits && movieData.credits.cast && <CastCarousel cast={movieData.credits.cast} />}
                            </div>
                            {/* <Button label={'Book Now'} size={'small'} handleBtnClick={() => handleNavigate(movieData.id)}/>*/}
                    </div>
                </>
            )}
        </>
    )
}

export default Movie