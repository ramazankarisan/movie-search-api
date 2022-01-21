import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieState from './context/MovieState';


ReactDOM.render(
  <MovieState>
    <App />
  </MovieState>,
  document.getElementById('root')
);

