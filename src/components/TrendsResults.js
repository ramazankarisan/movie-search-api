import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieListFetch from '../API/MovieListFetch';
import { requests } from '../API/requests';

const TrendsResults = () => {
  const { trend } = useParams();
  const [trends, setTrends] = useState([]);
  console.log(trends);
  function getData() {
    let baseUrl = "https://api.themoviedb.org/3",
      URL = baseUrl + `${requests[trend].url}`;

    return axios
      .get(URL || (baseUrl + requests.fetchTrending.url))
      .then(res => setTrends(res.data.results))
  }
  useEffect(() => {
    getData()
  }, [trend]);


  return <>
    <h1 className='text-3xl text-white'>trends results</h1>
  </>;
};

export default TrendsResults;
