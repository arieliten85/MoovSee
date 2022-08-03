import React, { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import Movie from "./Movie";

export default function MovieList() {
  const { movies } = useContext(MovieContext);

  if (movies.length === 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </>
    );
  }
}
