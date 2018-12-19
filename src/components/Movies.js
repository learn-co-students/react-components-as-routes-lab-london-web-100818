import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovie = movie => {
    return(
      <div>
        <h2>Name: {movie.title}</h2>
        <h4>Time: {movie.time}</h4>
        <h4>Genre:</h4>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  }
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(renderMovie)}
    </div>
  );
};

export default Movies;
