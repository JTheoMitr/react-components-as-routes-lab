import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorMapper = () => {
    return directors.map(director => {
      return <div> {director.name}
        <ul> {director.movies.map(movie => {
          return <li key={movie}>{movie}</li> })} 
        </ul>
      </div>
  })}

  return (
    <div>
        <h1>Directors Page</h1>
        {directorMapper()}
    </div>
  );
};

export default Directors;
