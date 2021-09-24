import { SET_MOVIES, SET_TOTAL_PAGES } from "./types";
import { API_KEY } from "../global";

export const getMovies = (category, page) => (dispatch) => {
  category = category.toLowerCase().split(" ").join("_");

  fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: SET_MOVIES,
        payload: data?.results
      });
      dispatch({
        type: SET_TOTAL_PAGES,
        payload: data?.total_pages
      });
    })
    .catch((error) => console.log(error));
};

export const getMovieDetails = (movieId) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=images,videos,credits,release_dates,watch/providers`
  )
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: SET_DRAWER_DETAILS,
        payload: data?.results
      });
    })
    .catch((error) => console.log(error));
};
