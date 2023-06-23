import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/moviesSlice";

// Menangkap props
function AddMovieForm() {

  const dispatch = useDispatch();

  //useNavigation
  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  
  const [ isFormMovieError, setIsFormMovieError] = useState({
    isTitleError: false,
    isDateError: false,
    isPosterError: false,
    isTypeError: false,
  });

  // Destructing formMovieError
  const { isTitleError, isDateError, isPosterError, isTypeError} = isFormMovieError;


  function handleChange(e) { 
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (title === "") {
      setIsFormMovieError({
        ...isFormMovieError,
        isTitleError: true,
      });
      return false;
    } else if (date === "") {
      setIsFormMovieError({
        ...isFormMovieError,
        isDateError: true,
        isTitleError: false,
      });
      return false;
    } else if (poster === "") {
      setIsFormMovieError({
        ...isFormMovieError,
        isPosterError: true,
        isDateError: false,
      });
      return false;
    } else{
      setIsFormMovieError({
        ...isFormMovieError,
        isTitleError: false,
        isDateError: false,
      });
      return true;
    }
  }

  function submitMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    dispatch(addMovie(movie));

    navigation("/");
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && submitMovie();
  }

  const { title, date, poster, type } = formData;

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleChange}
              />
              
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="poster" className={styles.form__label}>
                Poster
              </label>
              <input
                onChange={handleChange}
                id="poster"
                className={styles.form__input}
                name="poster"
                type="text"
                value={poster}
              />
              {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Type
              </label>
              <select
                id="type"
                className={styles.form__select}
                name="type"
                value={type}
                onChange={handleChange}
              >
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horor">Horor</option>
              </select>
            </div>
            <div>
              {/* <button className={styles.form__button}>Add Movie</button> */}
              <Button variant="primary" full>Add Movie</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
