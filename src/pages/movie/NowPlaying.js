import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function NowPlaying() {

  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlaying();
  }, []);

  async function getNowPlaying() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);

    // setMovies(response.data.results);
    dispatch(updateMovies(response.data.results))
  }

  return (
    <>
      <Hero />
      <Movies title="Now Playing Movie"/>
      
    </>
  );
}

export default NowPlaying;
