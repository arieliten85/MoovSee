import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { MovieContext } from "../../context/MovieContext";
import { SerieContext } from "../../context/SerieContext";
import MovieSelect from "./MovieSelect";
import { TMDB_API_KEY } from "../../context/apiKey";

export default function MovieSelectContainer() {
  const { id, categoria } = useParams();

  const { movieSelect, setMovieSelect, setSimilarMovie } =
    useContext(MovieContext);

  const { serieSelect, setSerieSelect, setSerieSimilar } =
    useContext(SerieContext);

  useEffect(() => {
    if (categoria === "movie") {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`)
        .then((res) => setMovieSelect(res.data));
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${TMDB_API_KEY}`
        )
        .then((res) => setSimilarMovie(res.data.results));
    } else if (categoria === "serie") {
      axios
        .get(`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}`)
        .then((res) => setSerieSelect(res.data));

      axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${TMDB_API_KEY}`
        )
        .then((res) => setSerieSimilar(res.data.results));
    }
  }, [id]);

  return (
    <>
      {categoria === "movie" ? (
        <MovieSelect key={movieSelect.id} movieSelect={movieSelect} />
      ) : (
        <MovieSelect key={serieSelect.id} movieSelect={serieSelect} />
      )}
    </>
  );
}
