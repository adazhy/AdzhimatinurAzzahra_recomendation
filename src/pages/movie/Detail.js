import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";

function Detail() {
    const params = useParams();
    // const [movies, setMovies] = useState([]);

    const dispatch = useDispatch();
    
    useEffect(() => {
        getRecommendationMovies();
    }, [params.id])

    async function getRecommendationMovies() {
        // const URL = `https://api.themoviedb.org/3/movie/${params.id}/recomendations?api_key=${API_KEY}`;
        const response = await axios (ENDPOINTS.RECOMMENDATION(params));
        dispatch(updateDetails(response.data.results))
    }

    return(
        <>
            <DetailMovie />
            <Movies title="Recommendation Movies" />
        </>
    );
}

export default Detail;