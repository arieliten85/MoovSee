import React from "react";

import { Link } from "react-router-dom";

export default function FavoritoSelect({ fav, i }) {
  return (
    <Link to={`/${fav.category}/${fav.favoriteId}`}>
      <div className="MovieBox">
        <img
          className="movieImage"
          src={`https://image.tmdb.org/t/p/original${fav.poster_path}`}
          alt="Placeholder"
        />
        <div>
          <h3 className="refTituloFav">
            {" "}
            <span>{i + 1}#</span>{" "}
            {fav.category === "movie" ? "Pelicula" : "Serie"}
          </h3>
        </div>
      </div>
    </Link>
  );
}
