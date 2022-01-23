import React from 'react';
import { useNavigate } from 'react-router-dom';
import { requests } from "../API/requests"

const NavbarTrends = () => {
  const navigate = useNavigate()
  return <>
    <div className='flex px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 text-xl text-black dark:text-white  overflow-x-scroll scrollbar-hide sm:justify-evenly scroll-horizon '>

      {Object.entries(requests).map(([key, { title, url }]) => {
        return (
          <h2 key={title}
            onClick={() => navigate(`/${key}`)}
            className='cursor-pointer transition duration-100 transform hover:scale-125 active:text-red-500'
          > {title}</h2>
        )
      })}

    </div>
  </>;
};

export default NavbarTrends;
