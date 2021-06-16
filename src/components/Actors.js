import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorMapper = () => {
    return actors.map(actor => {
      return <div> {actor.name}
        <ul> {actor.movies.map(movie => {
          return <li key={movie}>{movie}</li> })} 
        </ul>
      </div>
  })}

  return (
    <div>
        <h1>Actors Page</h1>
        {actorMapper()}
    </div>
  );
};

export default Actors;
