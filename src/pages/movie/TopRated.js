import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";

function TopRated() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRated();
  }, []);

  async function getTopRated() {
    const response = await axios(ENDPOINTS.TOP_RATED);

    // setMovies(response.data.results);
    dispatch(updateMovies(response.data.results));
  }

  console.log(movies);

  return (
    <>
      <Hero />
      <Movies title="Top Rated Movie" />
      
    </>
  );
}

export default TopRated;
