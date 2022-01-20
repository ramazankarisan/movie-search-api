import React from 'react';
import { BookmarkAltIcon, HomeIcon, LightBulbIcon, LoginIcon, TrendingDownIcon, TrendingUpIcon } from "@heroicons/react/outline"

const Header = () => {

  return <>
    <div>
      <HomeIcon className="w-8 text-white" />
      <TrendingUpIcon className="w-8 text-white" />
      <BookmarkAltIcon className="w-8 text-white" />
      <LightBulbIcon className="w-8 text-white" />
      <LoginIcon className="w-8 text-white" />

    </div>
  </>;
};

export default Header;
