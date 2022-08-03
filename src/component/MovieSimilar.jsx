import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function MovieSimilar({ movie }) {
  const { categoria } = useParams();
  return (
    <Link to={`/${categoria}/${movie.id}`}>
      <div className="CarSimilar">
        <div className="boxImg ">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Placeholder"
          />
        </div>
        <div>
          <h1 className="">
            {categoria === "serie" ? movie.original_name : movie.title}
          </h1>
        </div>
      </div>
    </Link>
  );
}
