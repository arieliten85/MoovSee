import React, { useContext } from 'react'
import { MovieContext } from '../../../context/MovieContext';
import MovieLastItem from './MovieLastItem';

export default function MovieLastList() {

    const { lastMovie } = useContext(MovieContext);

    const topFive = lastMovie.slice(0,6)


    return (
        <>
        <h2>COMING SOON</h2>
          {topFive.map((item) => (
            <MovieLastItem key={item.id} movie={item} />
          ))}
        </>
      );
}
