import React from "react";

import SerieList from "./SerieList";
import SerieSoonContainer from "./SerieSoonContainer";
import SerieTopContainer from "./SerieTopContainer";

export default function SeriesListContainer() {
  return (
    <>
      <div className="flexContainer">
        <div className="contenedorMovies">
          <SerieList />
        </div>
        <div className="contenedorTopMovies">
          <h2>TOP ESTRENOS</h2>
          <SerieTopContainer />
          <SerieSoonContainer />
        </div>
      </div>
    </>
  );
}
