import React from 'react';
import { requests } from "../API/requests"

const NavbarTrends = () => {

  return <>

    {Object.entries(requests).map(([key, { title, url }]) => {
      return (
        <h2 key={title}> {title}</h2>
      )
    })}
  </>;
};

export default NavbarTrends;
