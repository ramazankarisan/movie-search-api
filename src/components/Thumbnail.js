import { ThumbUpIcon } from '@heroicons/react/outline';
import React from 'react';

const Thumbnail = ({ result }) => {

  // this component is reused in both search results and trend results to show them
  const BASE_URL = "https://image.tmdb.org/t/p/w500"
  return <>
    <div className=' m-4 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 shadow-xl  hover:shadow-gray-900 dark:hover:shadow-zinc-200 '>
      <img className='w-100 h-[400px] object-cover  ' src={BASE_URL + (result.backdrop_path || result.poster_path)} alt="" />
      <div className='p-2'>
        <p className='truncate max-w-xs text-black dark:text-white'>{result.overview}</p>
        <h2 className='text-2xl text-black dark:text-white mt-1 transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
        <p className='flex items-center opacity-0 text-black dark:text-white group-hover:opacity-100 mt-1'>{result.media_type && `${result.media_type} -`} {" "} {result.release_date || result.first_air_date} {" "} <ThumbUpIcon className='h-5 mx-2 text-black dark:text-white' /> {result.vote_count}</p>
      </div>
    </div>
  </>;
};

export default Thumbnail;
