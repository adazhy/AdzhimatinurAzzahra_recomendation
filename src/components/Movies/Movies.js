import { nanoid } from "nanoid";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import Button from "../ui/Button";

function Movies(props) {
  // Destructing props: state movies
  const { movies, setMovies } = props;

  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "Jigsaw Spiral",
      year: 2021,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, movie]);
  }

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>{props.title}</h2>
          <div className={styles.movie__container}>
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
          <Button size="lg" variant="secondary" onClick={handleClick}>Add Movie</Button>
        </section>
      </div>
    </div>
  );
}

export default Movies;
