import axios from "axios";
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { TMDB_API_KEY } from "./apiKey";

export const SerieContext = createContext();
const SerieContextProvider = ({ children }) => {
  const [serie, setSerie] = useState([]);
  const [serieSelect, setSerieSelect] = useState([]);
  const [serieSimilar, setSerieSimilar] = useState([]);
  const [topSerie, setTopSerie] = useState([]);
  const [soonSerie, setSoonSerie] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}`)
      .then((resp) => {
        setSerie(resp.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${TMDB_API_KEY}`)
      .then((resp) => {
        setTopSerie(resp.data.results);
      })
      .catch((error) => console.log(error));

    axios
      .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${TMDB_API_KEY}`)
      .then((resp) => {
        setSoonSerie(resp.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <SerieContext.Provider
      value={{
        serie,
        topSerie,
        serieSelect,
        setSerieSelect,
        soonSerie,

        serieSimilar,
        setSerieSimilar,
      }}
    >
      {children}
    </SerieContext.Provider>
  );
};

export default SerieContextProvider;
