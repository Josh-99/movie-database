import React from "react";
import { useIsBelowSmallOnly } from "../../Hooks/MediaQueries";
import { BACKDROP_PATH } from "../../global";

const Modal = ({
  movies,
  adult,
  backdrop_path,
  genre_ids,
  id,
  original_language,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  title,
  video,
  vote_average,
  vote_count,
  setShowModal,
  selectedMovie
}) => {
  const isBelowSmall = useIsBelowSmallOnly();
  //console.log(movies);
  let getMovie = movies.filter((movie) => movie.id === selectedMovie);
  console.log(getMovie);
  const movie = getMovie[0];

  if (isBelowSmall)
    return (
      <div
        style={{
          left: "50%",
          top: "55%",
          transform: "translate(-50%, -50%)"
        }}
        className="fixed w-11/12 bg-gray-90 top-5 rounded-sm"
      >
        <img
          src={`${BACKDROP_PATH}${movie.backdrop_path}`}
          alt={`${movie.title}`}
          className="w-full rounded-sm"
        />
        <div
          className="ico ico-cancel ico-5x absolute top-0 right-0 pr-2 text-white text-body-sm"
          onClick={() => setShowModal(false)}
        ></div>
        <div className="flex justify-between text-white text-body-sm p-1">
          <div
            className={`pl-1 ${
              movie.vote_average >= 7 ? "text-ongreen" : "text-heat bg-gray-90"
            }`}
          >
            Voter Score: {movie.vote_average}
          </div>
          <div className="pr-2">{movie.adult}</div>
        </div>
        <div className="text-white text-body-sm p-2">{movie.overview}</div>
      </div>
    );

  if (!isBelowSmall)
    return (
      <div
        style={{
          left: "50%",
          top: "55%",
          transform: "translate(-50%, -50%)"
        }}
        className="fixed w-8/12 bg-gray-90 top-5 rounded-sm cursor-pointer"
      >
        <img
          src={`${BACKDROP_PATH}${movie.backdrop_path}`}
          alt={`${movie.title}`}
          className="w-full rounded-sm"
        />
        <div
          className="ico ico-cancel ico-5x absolute top-0 right-0 pt-2 pr-3 text-white text-body-sm"
          onClick={() => setShowModal(false)}
        ></div>
        <div className="flex justify-between text-white text-body p-1">
          <div
            className={`pl-1 ${
              movie.vote_average >= 7 ? "text-ongreen" : "text-heat bg-gray-90"
            }`}
          >
            Voter Score: {movie.vote_average}
          </div>
          <div className="pr-2">{movie.adult}</div>
        </div>
        <div className="text-white text-body p-2">{movie.overview}</div>
      </div>
    );
};

export default Modal;
