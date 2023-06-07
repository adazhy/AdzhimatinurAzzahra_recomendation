import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function NowPlaying() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  const [movies, setMovies] = useState ([]);

  useEffect(() => {
    getNowPlaying();
  }, []);

  async function getNowPlaying() {
    const response = await axios(URL);

    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Now Playing Movie" movies={movies} />
      
    </>
  );
}

export default NowPlaying;
