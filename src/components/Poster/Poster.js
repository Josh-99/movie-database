import React from "react";
import { POSTER_PATH } from "../../global"; //initial URL which the poster_path adds to get the image

const Poster = ({ poster_path, title }) => {
  // console.log(poster_path);
  return (
    <img
      className="focus:shadow-24dp hover:shadow-24dp rounded-sm w-full"
      src={`${POSTER_PATH}${poster_path}`}
      alt={title}
    />
  );
};

export default Poster;
