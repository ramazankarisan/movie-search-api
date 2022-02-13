import React, { useContext } from 'react';
import { BeakerIcon, BookmarkAltIcon, HomeIcon, LightBulbIcon, LoginIcon, MoonIcon, TrendingUpIcon } from "@heroicons/react/outline"
import { Link } from 'react-router-dom';
import MovieContext from '../context/MovieContext';

const Header = () => {
  // for darkTheme
  const { setTheme, colorTheme } = useContext(MovieContext)

  return <>
    <div className='flex justify-start sm:justify-center sm:space-x-5 my-4  '>

      <div className='headerContainer group'>
        <Link to="/">  <HomeIcon className="headerIcon" /></Link>
        <p className='headerText '>Home</p>
      </div>

      <div className='headerContainer group '>
        <TrendingUpIcon className="headerIcon " />
        <p className='headerText'>Trending</p>
      </div>

      <div className='headerContainer group '>
        <BookmarkAltIcon className="headerIcon" />
        <p className='headerText'> Collections</p>
      </div>

      <div className='headerContainer group '>
        <BeakerIcon className="headerIcon" />
        <p className='headerText'>Random</p>
      </div>

      <div className='headerContainer group '>
        <LoginIcon className="headerIcon" />
        <p className='headerText'>Login</p>
      </div>
      <span onClick={() => setTheme(colorTheme)}>
        {colorTheme === "light" ? <div className='headerContainer group '>
          <MoonIcon className="w-8 text-red-700 dark:text-white group-hover:animate-bounce" />
          <p className='text-red-700 dark:text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100'>Dark</p>
        </div> :
          <div className='headerContainer group '>
            <LightBulbIcon className="w-8 text-yellow-200 dark:text-white group-hover:animate-bounce  " />
            <p className=' text-yellow-200 dark:text-white text-lg font-bold tracking-wider opacity-0 group-hover:opacity-100'>Dark </p>
          </div>}
      </span>
    </div>
  </>;
};

export default Header;
