import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero() {
  // Membuat state
  const [movie, setMovie] = useState("");

  async function fectMovie() {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
      );
    
    const data = await response.json ();
    // set movie dengan data movie hasil fetch
    setMovie(data);
  }

  useEffect(() => {
    fectMovie();
  }, []);

  console.log(movie);
  return (
    <StyledHero>
        <section className="hero">
        <div className="hero__left">
          <h2>{movie.Title}</h2>
          <h3>
            Genre: {movie.Genre}
          </h3>
          <p>{movie.Plot}</p>
          {/* <button className={styles.hero__button}>Watch</button> */}
          <Button variant="secondary" tpg="sm" font="font-family" full>Watch</Button>
        </div>
        <div className="hero__right">
          <img
            // src={movie.Poster}
            src="https://picsum.photos/536/354"
            alt={movie.Title}
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
