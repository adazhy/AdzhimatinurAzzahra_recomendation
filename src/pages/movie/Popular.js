import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie() {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const [movies, setMovies] = useState ([]);

  useEffect(() => {
    getPopularMovies()
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);

    setMovies(response.data.results);
  };
  
  console.log(movies);

  return (
    <>
      <Hero />
      <Movies title="Popular Movie" movies={movies} />
    </>
  );
}

export default PopularMovie;
