import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";
import axios from "axios";
import Container from "../Container";
import ENDPOINTS from "../../utils/constants/endpoints";

function Hero() {
  // Membuat state
  const [movie, setMovie] = useState("");
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtobe.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() =>{
    getDetailMovie();
  }, []);

  async function getTrendingMovies() {
    // const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(ENDPOINTS.HERO);
    // console.log(response.data.results);
    return response.data.results[0];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    // const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(ENDPOINTS.DETAIL(id));
    // console.log(response.data);

    setMovie(response.data);
  };

  return (
    <Container>
      <StyledHero>
        <section className="hero">
        <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>
            Genre : {genres}
          </h3>
          <p>{movie.overview}</p>
          {/* <button className={styles.hero__button}>Watch</button> */}
          <Button as="a" href={trailer} target="_blank" variant="secondary">
            Watch
          </Button>
        </div>
        <div className="hero__right">
          <img
            // src={movie.Poster}
            src={
              `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
        />
        </div>
        </section>
    </StyledHero>
    </Container>
  );
}

export default Hero;
