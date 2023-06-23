// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function Home({movies, setMovies}) {
  return (
    <>
      <Hero />
      <Movies title="Lates Movies" movies={movies} setMovies={setMovies} />
      {/* <AddMovieForm movies={movies} setMovies={setMovies} /> */}
    </>
  );
}

export default Home;
