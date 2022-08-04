import React from "react";
import { Link } from "react-router-dom";
export default function SoonSeries({ SoonSerie }) {
  
  return (
    <Link to={`/serie/${SoonSerie.id}`}>
      <div className="MovieBox">
        <img
          className="movieImageTop"
          src={`https://image.tmdb.org/t/p/original${SoonSerie.poster_path}`}
          alt="Placeholder"
        />

        <div className="infoBoxCard">
          <h4
            style={{ fontSize: "20px", width: "100%", paddingTop: "15px" }}
            className="movieTitle "
          >
            {SoonSerie.original_name}
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
              {SoonSerie.vote_average}/
              <span style={{ fontSize: "17.9px" }}>10</span>
            </p>
            <p className="horaTop">
              {Math.ceil(Math.random() * 2)}h:{Math.ceil(Math.random() * 60)}
              min
            </p>
            <p className="añoTop">{SoonSerie.first_air_date.substring(0, 4)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
