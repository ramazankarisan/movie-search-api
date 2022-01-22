import React, { useContext } from 'react';
import MovieContext from '../context/MovieContext';
import Thumbnail from './Thumbnail';

const SearchResults = () => {
  const { movieList } = useContext(MovieContext)

  return <>
    <div className='my-10 p-10 flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-3  '>
      {movieList.map(result => <Thumbnail key={result.id} result={result} />)}
    </div>
  </>

};

export default SearchResults;
