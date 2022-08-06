import React from "react";
import { Link } from "react-router-dom";

export default function MovieTopItem({ movie }) {
 

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="MovieBox">
        <img
          className="movieImageTop"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="Placeholder"
        />
        <div className="infoBoxCard">
          <h4
            style={{ fontSize: "20px", width: "100%", paddingTop: "15px" }}
            className="movieTitle "
          >
            {movie.title}
          </h4>
          <div
           className='datainfo'
            style={{
              display: "flex",
              gap: "10px",
              // justifyContent:"space-around",
              width: "100%"
            }}
          >
            <p className="votoTop ">{movie.vote_average}/<span  style={{fontSize: "17.9px"}} >10</span></p>
            <p className="horaTop">{Math.ceil(Math.random() * 2)}h:{Math.ceil(Math.random() * 60)} min</p>
            <p className="añoTop"> {movie.release_date.substring(0, 4)} </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
