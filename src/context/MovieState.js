import React from 'react';
import { useParams } from 'react-router-dom';
import MovieContext from './MovieContext';

const MovieState = (props) => {
  const { trend } = useParams()

  return (
    <MovieContext.Provider value={{ trend }}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieState;
