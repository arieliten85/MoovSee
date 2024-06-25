import React from "react";
import { Link } from "react-router-dom";
import HookFavoritos from "../../../utils/HookFavoritos";

export default function Serie({ serie }) {
  let data = "";
  if (serie.release_date) {
    data = "release_date";
  } else {
    // eslint-disable-next-line no-unused-vars
    data = "first_air_date";
  }

  return (
    <div className="card">
      <div className="MovieBox">
        <Link to={`/serie/${serie.id}`}>
          <img
            className="movieImage"
            src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
            alt="Placeholder"
          />
        </Link>
        <div className="infoBoxCard">
          <h4
            style={{ fontSize: "15px", width: "100%", paddingTop: "15px" }}
            className="movieTitle "
          >
            {serie.original_name}
          </h4>
          <p className="texto"> - {serie.first_air_date.substring(0, 4)} -</p>
        </div>
      </div>
      <HookFavoritos movieSelect={serie} category={"serie"} id={serie.id} />
    </div>
  );
}
