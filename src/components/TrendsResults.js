import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requests } from '../API/requests';
import Thumbnail from './Thumbnail';

const TrendsResults = () => {
  const { trend } = useParams();
  const [trends, setTrends] = useState([]);

  function getData() {
    let baseUrl = "https://api.themoviedb.org/3",
      URL = baseUrl + `${requests[trend]?.url || requests.fetchTrending.url}`;
    return axios
      .get(URL)
      .then(res => setTrends(res.data.results))
  };

  useEffect(() => {
    getData()
  }, [trend]);

  return <>
    <div className='my-10 p-10 flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-3  '>
      {trends.map(result => <Thumbnail key={result.id} result={result} />)}
    </div>
  </>
};

export default TrendsResults;
