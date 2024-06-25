import axios from "axios";
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation, useParams } from "react-router";
import { TMDB_API_KEY } from "./apiKey";

export const MovieContext = createContext();

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [moviesBanner, setMoviesBanner] = useState([]);
  const [movieSelect, setMovieSelect] = useState([]);
  const [topMovie, setTopMovie] = useState([]);
  const [lastMovie, setLastMovie] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);

  const query = useQuery();
  const search = query.get("search");

  const getMovieById = (section, id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/${section}/${id}?api_key=${TMDB_API_KEY}`
      )
      .then((res) => setMovieSelect(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const searchUrl = search
      ? `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&language=en-US&query=${search}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`;

    axios
      .get(searchUrl)
      .then((resp) => {
        setMovies(resp.data.results);
      })
      .catch((error) => console.log(error));
  }, [search, TMDB_API_KEY]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`
      )
      .then((resp) => {
        setTopMovie(resp.data.results);
      })
      .catch((error) => console.log(error));

    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}`
      )
      .then((resp) => {
        setLastMovie(resp.data.results);
      })
      .catch((error) => console.log(error));

    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`)
      .then((resp) => {
        setMoviesBanner(resp.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        movieSelect,
        setMovieSelect,
        topMovie,
        setTopMovie,
        setLastMovie,
        lastMovie,
        setSimilarMovie,
        similarMovie,
        moviesBanner,
        getMovieById,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
