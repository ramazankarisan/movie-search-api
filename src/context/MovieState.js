import React from 'react';
import MovieContext from './MovieContext';

const MovieState = (props) => {


  return (
    <MovieContext.Provider value={{}}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieState;
