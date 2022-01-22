import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieState from './context/MovieState';
import { BrowserRouter } from "react-router-dom"


ReactDOM.render(
  <BrowserRouter >
    <MovieState>
      <App />
    </MovieState>
  </BrowserRouter>,
  document.getElementById('root')
);

