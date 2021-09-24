import React from "react";
import Card from "../Card/Card";
// import Poster from "../Poster/Poster";
import { useSelector } from "react-redux";

const Container = () => {
  const { movies } = useSelector((state) => state);

  return (
    <div className="p-4">
      <div className="flex flex-wrap max-w-screen-xl mx-auto">
        {movies?.map((movie) => (
          <Card {...movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Container;
