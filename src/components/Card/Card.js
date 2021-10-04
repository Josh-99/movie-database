import React from "react";
import Poster from "../Poster/Poster";
import { useIsBelowSmallOnly } from "../../Hooks/MediaQueries";

const Card = ({
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
  handleClick
}) => {
  const isBelowSmall = useIsBelowSmallOnly();

  if (isBelowSmall) {
    return (
      <div className="w-1/2">
        <div className="p-2">
          <Poster
            poster_path={poster_path}
            title={title}
            setShowModal={setShowModal}
            id={id}
            handleClick={handleClick}
          />
        </div>
      </div>
    );
  }

  if (!isBelowSmall) {
    return (
      <div className="w-1/5 cursor-pointer">
        <div className="p-2">
          {/* <div className="font-semibold leading-none text-center">{title}</div> */}
          <Poster
            poster_path={poster_path}
            title={title}
            setShowModal={setShowModal}
            id={id}
            handleClick={handleClick}
          />
        </div>
      </div>
    );
  }
};

export default Card;
