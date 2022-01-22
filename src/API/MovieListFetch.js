import axios from "axios";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import { requests } from "./requests";

const MovieListFetch = () => {
  // const { trend } = useContext(MovieContext);
  const { trend } = useParams();
  let apiKey = process.env.REACT_APP_API_KEY,
    baseUrl = "https://api.themoviedb.org/3",
    URL = baseUrl + `${requests.trend.url}`;


  return console.log(axios
    .get(URL));

}

export default MovieListFetch