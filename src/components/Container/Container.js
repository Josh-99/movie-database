import { React, useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";

const Container = () => {
  const { movies } = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState("");

  const handleClick = (selectedId) => {
    setSelectedMovie(selectedId);
    setShowModal(true);
  };

  return (
    <div className="p-2 bg-black">
      <div className="flex flex-wrap max-w-screen-xl mx-auto bg-black">
        {movies?.map((movie) => (
          <Card
            {...movie}
            key={movie.id}
            setShowModal={setShowModal}
            handleClick={handleClick}
          />
        ))}
        {showModal && (
          <Modal
            movies={movies}
            {...movies}
            selectedMovie={selectedMovie}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
};

export default Container;
