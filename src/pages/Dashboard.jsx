import { useEffect, useState } from 'react';
import { getFeatureMovie, getNowPlayingMovies ,getUpcomingMovies } from '../services/api.js';
import Header from '../components/Header/Header.jsx'
import MainCarousel from '../components/MainCarousel/MainCarousel.jsx';
import MoviesCarousel from '../components/MoviesCarousel/MoviesCarousel';
import styles from '../styles/dashboard.module.scss';

const Dashboard = () => {
    const featureMoviesIds = [872585,572802,787699,866398];
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const fetchData = async () => {
        try {
            setFeaturedMovies([])
            for (const movieId of featureMoviesIds) {
                const movieData = await getFeatureMovie(movieId);
                setFeaturedMovies((prevFeaturedMovies) => [...prevFeaturedMovies, movieData]);
            }

            const nowPlayingData = await getNowPlayingMovies();
            setNowPlayingMovies(nowPlayingData);

            const upcomingData = await getUpcomingMovies();
            setUpcomingMovies(upcomingData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {    
        fetchData();
    }, []);  

    return (
        <>
            <Header />
            <main className={styles.pageContent}>
                <MainCarousel movies={featuredMovies} />
                <div className={styles.nowPlayingSection}>
                    <h2 className="sectionTitle">Now Playing</h2>
                    <p className="sectionSubTitle">Playing In theaters now</p>
                    {nowPlayingMovies.length > 0 ? 
                        (<MoviesCarousel movies={nowPlayingMovies} type={'now-playing'}/>) 
                        : (<p>Loading...</p>)}
                
                </div>
                <div className={styles.upcomingSection}>
                    <h2 className="sectionTitle">Coming Soon</h2>
                    <p className="sectionSubTitle">Movies on their way to the big screen</p>
                    
                    {upcomingMovies.length > 0 ? 
                        (<MoviesCarousel movies={upcomingMovies} type={'upcoming'}/>) 
                        : (<p>Loading...</p>)}        
                </div>
            </main>
        </>
    )
}

export default Dashboard