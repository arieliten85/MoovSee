import React, { useContext } from "react";
import { MovieContext } from "../../../context/MovieContext";
import MovieTopItem from "./MovieTopItem";

export default function MovieTopList() {
  const { topMovie } = useContext(MovieContext);
  const topFive = topMovie.slice(0, 8);

  return (
    <>
      {topFive.map((item) => (
        <MovieTopItem key={item.id} movie={item} />
      ))}
    </>
  );
}
