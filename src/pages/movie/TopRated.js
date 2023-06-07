import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function TopRated() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  const [movies, setMovies] = useState ([]);

  useEffect(() => {
    getTopRated();
  }, []);

  async function getTopRated() {
    const response = await axios(URL);

    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Top Rated Movie" movies={movies} />
      
    </>
  );
}

export default TopRated;
