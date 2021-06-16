import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieMapper = () => {
    return movies.map(movie => {
      return <div> {movie.title}: {movie.time}
        <ul> {movie.genres.map(genre => {
          return <li key={genre}>{genre}</li> })} 
        </ul>
      </div>
  })}

  return (
    <div>
        <h1>Movies Page</h1>
        {movieMapper()}
    </div>
  );
};

export default Movies;
