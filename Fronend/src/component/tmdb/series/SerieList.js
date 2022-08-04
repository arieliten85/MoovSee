import React, { useContext } from "react";
import { SerieContext } from "../../../context/SerieContext";
import Serie from "./Series";
export default function SerieList() {
  const { serie } = useContext(SerieContext);
  if (serie.length === 0) {
    return <p>Cargando...</p>;
  } else {
    return (
      <>
        {serie.map((serie) => (
          <Serie key={serie.id} serie={serie} />
        ))}
      </>
    );
  }
}
