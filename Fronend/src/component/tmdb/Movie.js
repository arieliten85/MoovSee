import React from "react";
import { Link } from "react-router-dom";
import HookFavoritos from "../../utils/HookFavoritos";

export default function Movie({ movie }) {
  let data;
  if (movie.release_date) data = "release_date";
  if (movie.first_air_date) data = "first_air_date";

  return (
    <>
      <div className="card">
        <div className="MovieBox">
          <Link to={`/movie/${movie.id}`}>
            <img
              className="movieImage"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="Placeholder"
            />
          </Link>
          <div className="infoBoxCard">
            <h4
              style={{ fontSize: "15px", width: "100%", paddingTop: "15px" }}
              className="movieTitle"
            >
              {movie.title}
            </h4>

            <p className=""> - {movie[data].substring(0, 4)} -</p>
          </div>
        </div>
        <HookFavoritos movieSelect={movie} category={"movie"} id={movie.id} />
      </div>
    </>
  );
}
