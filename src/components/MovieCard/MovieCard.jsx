import styles from './movie-card.module.scss';
import { formatRating } from '../../utils/formatter.js';
import Button from '../ui/Button/Button.jsx';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../contexts/FavoritesContext.jsx';

const MovieCard = ({movie, type}) => {
    const movieTimes = ['11:15','14:15','17:15','20:15'];
    const { isFavorite, toggleFavorite } = useFavorites();

    const navigate = useNavigate();  
    const handleNavigate = (id, time = null) => {
        if(type === 'now-playing') {
            if (time) {
                navigate(`/movie/${id}?time=${time}`);
            } else {
                navigate(`/movie/${id}`);
            }
        }
        if(type === 'upcoming') {
            navigate(`/movie/${id}?type=upcoming`);
        }
    };

    const handleFavoriteBtnClick = movie => {
        toggleFavorite(movie);
    }

    return (
        <>
            <div 
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                }}
                className={styles.movieImage}
            >   
                <a className={styles.favoriteIcon} onClick={() => handleFavoriteBtnClick(movie)}>
                    {isFavorite(movie) ? (<FaHeart size={20}/>) : (<FaRegHeart size={20}/>)}
                </a>
                <div className={styles.movieTimes}>
                {type === 'now-playing' && (
                    movieTimes.map((time, index) => (
                    <Button 
                        key={index} 
                        label={time} 
                        size={'extraSmall'} 
                        handleBtnClick={() => handleNavigate(movie.id, time)}
                    />
                    ))
                )}
                {type === 'upcoming' && (
                    <Button 
                    label={'Book Now'} 
                    size={'small'} 
                    handleBtnClick={() => handleNavigate(movie.id)}
                    />
                )}
                               
                </div>
            </div>
            <div className={styles.movieContent}>
                <h3 onClick={() => handleNavigate(movie.id)}>
                    {movie.title}
                    </h3>
                {type === 'now-playing' && (
                    <span className={styles.movieRating}>
                        <FaStar size={11}/>
                        {formatRating(movie.vote_average)}
                    </span>
                    )}                     
            </div>
        </>
    )
}

export default MovieCard