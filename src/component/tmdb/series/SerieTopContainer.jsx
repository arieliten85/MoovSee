import React, { useContext } from "react";
import { SerieContext } from "../../../context/SerieContext";
import TopSeries from "./TopSeries";

export default function SerieTopContainer() {
  const { topSerie } = useContext(SerieContext);
  const serieTopArr = topSerie.slice(0,9)
  return (
    <>
      {serieTopArr.map((item) => (
        <TopSeries key={item.id} topSerie={item} />
      ))}
    </>
  );
}
