import React from "react";
import { Link } from "react-router-dom";
export default function TopSeries({ topSerie }) {
  return (
    <Link to={`/serie/${topSerie.id}`}>
      <div className="MovieBox">
        <img
          className="movieImageTop"
          src={`https://image.tmdb.org/t/p/original${topSerie.poster_path}`}
          alt="Placeholder"
        />
        <div className="infoBoxCard">
          <h4
            style={{ fontSize: "20px", width: "100%", paddingTop: "15px" }}
            className="movieTitle "
          >
            {topSerie.original_name}
          </h4>
          <div
            className="datainfo"
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "80%",
            }}
          >
            <p className="votoTop ">
              {topSerie.vote_average}/
              <span style={{ fontSize: "17.9px" }}>10</span>
            </p>
            <p className="horaTop">
              {Math.ceil(Math.random() * 2)}h:{Math.ceil(Math.random() * 60)}
              min
            </p>
            <p className="añoTop">{topSerie.first_air_date.substring(0, 4)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
