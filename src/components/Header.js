import React, { useContext } from 'react';
import { BeakerIcon, BookmarkAltIcon, HomeIcon, LightBulbIcon, LoginIcon, MoonIcon, TrendingUpIcon } from "@heroicons/react/outline"
import { Link } from 'react-router-dom';
import MovieContext from '../context/MovieContext';

const Header = () => {
  const { setTheme, colorTheme } = useContext(MovieContext)

  return <>
    <div className='flex justify-start sm:justify-center sm:space-x-5 my-4  '>

      <div className='flex flex-col justify-center items-center space-y-2 group cursor-pointer '>
        <Link to="/">  <HomeIcon className="w-8  text-black dark:text-white group-hover:animate-bounce" /></Link>
        <p className='text-black dark:text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100 '>Home</p>
      </div>

      <div className='flex flex-col justify-center items-center space-y-2 group cursor-pointer '>
        <TrendingUpIcon className="w-8 text-black dark:text-white group-hover:animate-bounce " />
        <p className='text-black dark:text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100'>Trending</p>
      </div>

      <div className='flex flex-col justify-center items-center space-y-2 group cursor-pointer '>
        <BookmarkAltIcon className="w-8 text-black dark:text-white group-hover:animate-bounce" />
        <p className='text-black dark:text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100'> Collections</p>
      </div>

      <div className='flex flex-col justify-center items-center space-y-2 group cursor-pointer '>
        <BeakerIcon className="w-8 text-black dark:text-white group-hover:animate-bounce" />
        <p className='text-black dark:text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100'>Random</p>
      </div>

      <div className='flex flex-col justify-center items-center space-y-2 group cursor-pointer '>
        <LoginIcon className="w-8 text-black dark:text-white  group-hover:animate-bounce" />
        <p className='text-black dark:text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100'>Login</p>
      </div>
      <span onClick={() => setTheme(colorTheme)}>
        {colorTheme === "light" ? <div className='flex flex-col justify-center items-center space-y-2 group cursor-pointer '>
          <MoonIcon className="w-8 text-red-700 dark:text-white group-hover:animate-bounce" />
          <p className='text-red-700 dark:text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100'>Dark</p>
        </div> :
          <div className='flex flex-col justify-center items-center space-y-2 group cursor-pointer '>
            <LightBulbIcon className="w-8 text-yellow-200 dark:text-white group-hover:animate-bounce  " />
            <p className=' text-yellow-200 dark:text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100'>Dark </p>
          </div>}
      </span>
    </div>
  </>;
};

export default Header;
