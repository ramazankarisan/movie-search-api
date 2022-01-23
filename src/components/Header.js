import React from 'react';
import { BookmarkAltIcon, HomeIcon, LightBulbIcon, LoginIcon, TrendingUpIcon } from "@heroicons/react/outline"
import { Link } from 'react-router-dom';

const Header = () => {

  return <>
    <div className='flex justify-start sm:justify-center sm:space-x-5 my-4  '>

      <div className='flex flex-col justify-center items-center space-y-2 group cursor-pointer '>
        <Link to="/">  <HomeIcon className="w-8 text-white group-hover:animate-bounce" /></Link>
        <p className='text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100 '>Home</p>
      </div>

      <div className='flex flex-col justify-center items-center space-y-2 group cursor-pointer '>
        <TrendingUpIcon className="w-8 text-white group-hover:animate-bounce " />
        <p className='text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100'>Trending</p>
      </div>

      <div className='flex flex-col justify-center items-center space-y-2 group cursor-pointer '>
        <BookmarkAltIcon className="w-8 text-white group-hover:animate-bounce" />
        <p className='text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100'> Collections</p>
      </div>

      <div className='flex flex-col justify-center items-center space-y-2 group cursor-pointer '>
        <LightBulbIcon className="w-8 text-white group-hover:animate-bounce" />
        <p className='text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100'>Random</p>
      </div>

      <div className='flex flex-col justify-center items-center space-y-2 group cursor-pointer '>
        <LoginIcon className="w-8 text-white group-hover:animate-bounce" />
        <p className='text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100'>Login</p>
      </div>

    </div>
  </>;
};

export default Header;
