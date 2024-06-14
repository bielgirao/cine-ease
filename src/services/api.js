import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    params: {
        api_key: import.meta.env.VITE_API_KEY,
    },
});

export const getFeatureMovie = async (id) => {
    try {
        const response = await api.get(`/movie/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Featured Movies Request Error:', error);
    }
};

export const getNowPlayingMovies = async () => {
    try {
        const response = await api.get('/movie/now_playing');
        return response.data.results;
    } catch (error) {
        throw new Error('Now Playing Movies Request Error:', error);
    }
};

export const getUpcomingMovies = async () => {
    try {
        const response = await api.get('/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&primary_release_date.gte=2024-02-17&sort_by=popularity.desc');
        return response.data.results;
    } catch (error) {
        throw new Error('Upcoming Movies Request Error:', error);
    }
};
  
export const getMovieById = async (id) => {
    try {
        const response = await api.get(`/movie/${id}?append_to_response=credits%2Cimages%2Cvideos`);
        return response.data;
    } catch (error) {
        throw new Error('Movie Request Error:', error);
    }
};