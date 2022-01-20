import React from 'react';

const SearchBar = () => {
  return <>
    <div className='flex flex-col h-40 justify-center items-center'>
      <h1 className='text-4xl text-white mb-10'> Search a Movie</h1>
      <div>
        <form action="">
          <input type="text" name="" id="" className='sm:w-96 pl-4 rounded-lg p-1 bg-gray-600 outline outline-1 text-white' />
          <input type="submit" value="search" className='hover:text-black hover:font-bold hover:bg-white  ml-5 rounded-lg p-1 w-16 text-white bg-slate-900' />
        </form>
      </div>
    </div>
  </>;
};

export default SearchBar;
