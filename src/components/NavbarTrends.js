import React from 'react';
import { useNavigate } from 'react-router-dom';
import { requests } from "../API/requests"

const NavbarTrends = () => {
  const navigate = useNavigate()
  return <>

    {Object.entries(requests).map(([key, { title, url }]) => {
      return (
        <h2 key={title}
          onClick={() => navigate(`/${key}`)}
        > {title}</h2>
      )
    })}
  </>;
};

export default NavbarTrends;
