import React, { useContext } from "react";
import { useParams } from "react-router";
import { MovieContext } from "../context/MovieContext";
import { SerieContext } from "../context/SerieContext";
import Carousel from "./Carousel";

export default function MovieSimilarList() {
  const { categoria } = useParams();
  const { similarMovie } = useContext(MovieContext);
  const { serieSimilar } = useContext(SerieContext);
  return (
    <div className="similarContainer">
      {categoria === "serie" ? 
        <Carousel similarFive={serieSimilar} />
       : 
        <Carousel similarFive={similarMovie} />
      }
    </div>
  );
}
