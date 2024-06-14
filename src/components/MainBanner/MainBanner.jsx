import styles from './main-banner.module.scss';
import { extractYear, formatRating } from '../../utils/formatter.js';
import { FaStar } from 'react-icons/fa';
import Button from '../../components/ui/Button/Button.jsx'
import { useNavigate } from 'react-router-dom';

const MainBanner = ({movie}) => {
    const navigate = useNavigate();  
    const handleNavigate = id => {
        navigate(`/movie/${id}`);
    };
    
    return (
        <>
            <div 
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                }}
                className={styles.bannerWrapper}
            >
                <div className={styles.bannerContent}>
                    <h3>{movie.title}</h3>
                    <div className={styles.movieInfo}>
                        <span className={styles.movieRating}>
                            <FaStar size={10}/>
                            {formatRating(movie.vote_average)}
                        </span>
                        <span>{extractYear(movie.release_date)}</span>
                        <span>{movie.runtime}m</span>
                        <span className={styles.movieGenres}>{movie.genres.map((genre, index) => {
                            return (index <= 1 && <span key={genre.id} className={styles.movieGenre}>{genre.name}</span>)}
                        )}</span>
                    </div>
                    <Button label={'Book Now'} size={'small'} handleBtnClick={() => handleNavigate(movie.id)}/>                            
                </div>
            </div>
        </>
    )
}

export default MainBanner