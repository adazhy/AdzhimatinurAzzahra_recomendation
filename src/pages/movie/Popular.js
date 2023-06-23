import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function PopularMovie() {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies()
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    dispatch(updateMovies(response.data.results))
  };

  return (
    <>
      <Hero />
      <Movies title="Popular Movie" />
    </>
  );
}

export default PopularMovie;
