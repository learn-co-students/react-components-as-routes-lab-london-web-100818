import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => 
        <div>
          <h1>Name: {actor.name}</h1>
          <h3>Movies:</h3>
          <ul>
            {actor.movies.map(movie => 
              <li>
                <h3>{movie}</h3>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Actors;
