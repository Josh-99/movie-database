import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

import { getMovies } from "./redux/actions";

const App = () => {
  const { category, pages: { current } = {} } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(category, current));
  }, [category, current, dispatch]);

  return (
    <React.Fragment>
      <Header />
      <Container />
    </React.Fragment>
  );
};

export default App;
