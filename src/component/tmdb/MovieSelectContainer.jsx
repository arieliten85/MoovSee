import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { MovieContext } from "../../context/MovieContext";
import { SerieContext } from "../../context/SerieContext";
import MovieSelect from "./MovieSelect";

export default function MovieSelectContainer() {
  const { movieSelect, setMovieSelect, setSimilarMovie } = useContext(MovieContext);
  const { serieSelect, setSerieSelect, setSerieSimilar } = useContext(SerieContext);
  const { id, categoria } = useParams();
  
  useEffect(() => {
    if (categoria === "movie") {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=0719e4f07abaf7a91364967ca675ffc0`
        )
        .then((res) => setMovieSelect(res.data));
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=0719e4f07abaf7a91364967ca675ffc0`
        )
        .then((res) => setSimilarMovie(res.data.results));
    }
    
    
   else if (categoria === "serie")  {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=0719e4f07abaf7a91364967ca675ffc0`
        )
        .then((res) => setSerieSelect(res.data));


        axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}/similar?api_key=0719e4f07abaf7a91364967ca675ffc0`
        )
        .then((res) => setSerieSimilar(res.data.results));
    }
  }, [id]);

  return (
    <>
      {categoria === "movie" ? 
        <MovieSelect key={movieSelect.id} movieSelect={movieSelect} />
       : 
        <MovieSelect key={serieSelect.id} movieSelect={serieSelect} />
      }
    </>
  );
}
