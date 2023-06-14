const API_KEY = process.env.REACT_APP_AP_KEY;
const BASE_URL = "http://api.themoviedb.org/3";

const ENDPOINTS = {
    POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    TOPRATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    NOWPLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
    HERO: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    DETAIL: (id) => {
        return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
        //tambahkan endpoint lain
      },
    RECOMMENDATION: (params) => {
        return `${BASE_URL}/movie/${params.id}/recommendations?api_key=${API_KEY}`;
    },
};

export default ENDPOINTS;