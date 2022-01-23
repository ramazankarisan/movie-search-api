import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MovieContext from './MovieContext';

const MovieState = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY
  const navigate = useNavigate();
  const [movieName, setMovieName] = useState('');
  const [error, setError] = useState('');
  const [movieList, setMovieList] = useState([]);

  // for darkMode
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "light" ? "dark" : "light"

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

  }, [theme]);


  const searchMovie = (e) => {
    e.preventDefault();
    setMovieName(e.target[0].value);
    navigate("/search")
    setError('')

  }
  const finId = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`)
      .then(item => setMovieList(item.data.results))
      .catch(err => {
        console.log(err);
        setError("An Error occured and cannot be reached to the results")
        console.log(error);
      })

  };
  useEffect(() => {
    if (movieName === '') {
      return
    }
    finId()
  }, [movieName]);

  return (
    <MovieContext.Provider value={{ searchMovie, movieList, movieName, error, setTheme, colorTheme }}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieState;
