import React from "react";
import Poster from "../Poster/Poster";

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
  vote_count
}) => {
  return (
    <div className="w-1/5 cursor-pointer">
      <div className="p-2">
        {/* <div className="font-semibold leading-none text-center">{title}</div> */}
        <Poster poster_path={poster_path} title={title} />
      </div>
    </div>
  );
};

export default Card;
