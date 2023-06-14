import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
    const params = useParams();
    const [movies, setMovies] = useState([]);
    // const API_KEY = process.env.REACT_APP_API_KEY;
    
    useEffect(() => {
        getRecommendationMovies();
    }, [params.id])

    function getRecommendationMovies() {
        // const URL = `https://api.themoviedb.org/3/movie/${params.id}/recomendations?api_key=${API_KEY}`;
        const response = axios(ENDPOINTS.RECOMMENDATION(params));
        setMovies(response.date.results);
    }

    console.log(movies);

    return(
        <>
            <DetailMovie />
            <Movies movies={movies} />
        </>
    );
}

export default Detail;