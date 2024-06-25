import React from "react";
import MovieList from "./MovieList";
import MovieTopContainer from "./sidebarTop/MovieTopContainer";
import MovieLastContainer from "./sidebarTop/MovieLastContainer";

import SerieTopContainer from "./series/SerieTopContainer";
import SerieSoonContainer from "./series/SerieSoonContainer";
import { useParams } from "react-router";
import SerieList from "./series/SerieList";
import BannerContenedor from "../banner/BannerContenedor";

export default function MovieListContainer() {
  const { categoria } = useParams();

  let cat;
  if (categoria === "movie") cat = "Movies";
  else if (categoria === "serie") cat = "Series";
  else if (categoria === undefined) cat = "Movies";

  return (
    <>
      {!categoria ? <BannerContenedor /> : ""}
      <h1 className={!categoria ? "tituloPelis" : "tituloPelis2"}>
        {cat} Online
      </h1>
      {categoria === "serie" ? (
        <div className="flexContainer">
          <div className="contenedorMovies">
            <SerieList />
          </div>
          <div className="contenedorTopMovies">
            <h2>TOP PREMIERES</h2>
            <SerieTopContainer />
            <SerieSoonContainer />
          </div>
        </div>
      ) : (
        <div className="flexContainer">
          <div className="contenedorMovies">
            <MovieList />
          </div>
          <div className="contenedorTopMovies">
            <h2>TOP PREMIERES</h2>
            <MovieTopContainer />
            <MovieLastContainer />
          </div>
        </div>
      )}
    </>
  );
}
