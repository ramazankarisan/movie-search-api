import React, { useContext } from 'react';
import MovieContext from '../context/MovieContext';
import Thumbnail from './Thumbnail';

const SearchResults = () => {
  const { movieList, movieName, error } = useContext(MovieContext)

  return <>
    {error.length > 0 && <h1>{error}</h1>}
    {error.length === 0 && <><h1 className='text-center my-6 pt-6 text-3xl text-slate-600  border-t-2 '>  Search results for:<b className='text-black dark:text-white'> {movieName}</b></h1>
      <div className='my-10 p-10 flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-3  '>
        {movieList.map(result => <Thumbnail key={result.id} result={result} />)}
      </div></>}
  </>

};

export default SearchResults;
