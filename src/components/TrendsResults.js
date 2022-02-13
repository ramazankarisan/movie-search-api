import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requests } from '../api/requests';
import Thumbnail from './Thumbnail';

const TrendsResults = () => {
  const { trend } = useParams();
  const [trends, setTrends] = useState([]);

  // whenever we click one of the items, it becomes the parameter of the pathname, and according to that paramerter we fetch data from the api and than render it to the page
  function getData() {
    let baseUrl = "https://api.themoviedb.org/3",
      URL = baseUrl + `${requests[trend]?.url || requests.fetchTrending.url}`;
    return axios
      .get(URL)
      .then(res => setTrends(res.data.results))
  };

  // get data according to the changing parameter
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
