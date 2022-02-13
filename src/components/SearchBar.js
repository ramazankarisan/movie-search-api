import React, { useContext } from 'react';
import MovieContext from '../context/MovieContext';

const SearchBar = () => {
  const { searchMovie } = useContext(MovieContext)

  return <>
    <div className='flex flex-col h-40 justify-center items-center'>
      <h1 className='text-4xl text-black dark:text-white mb-10'> Search a Movie</h1>
      <div>

        {/* with this form getting the input value and then saving it to a state and then we can use it i another get request */}
        <form onSubmit={searchMovie}>
          <input type="text" name="" id="" className='sm:w-96 pl-4 rounded-lg p-1 bg-gray-600 outline outline-1 text-white' />
          <input type="submit" value="search" className='hover:text-black hover:font-bold hover:bg-white dark:border-2  ml-5 rounded-lg p-1 w-16 text-white bg-slate-900 cursor-pointer' />
        </form>
      </div>
    </div>
  </>;
};

export default SearchBar;
