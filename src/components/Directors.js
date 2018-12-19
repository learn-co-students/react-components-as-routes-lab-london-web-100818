import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderDirector = director => {
    return(
      <div>
        <h2>Name: {director.name}</h2>
        <h4>Movies:</h4>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(renderDirector)}
    </div>
  );
}

export default Directors
