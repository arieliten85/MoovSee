import React, { useContext } from "react";
import { SerieContext } from "../../../context/SerieContext";
import SoonSeries from "./SoonSeries";

export default function SerieSoonContainer() {
  const { soonSerie } = useContext(SerieContext);
  const soon = soonSerie.slice(0, 5);
  return (
    <>
      <h2>COMING SOON</h2>
      {soon.map((item) => (
        <SoonSeries key={item.id} SoonSerie={item} />
      ))}
    </>
  );
}
