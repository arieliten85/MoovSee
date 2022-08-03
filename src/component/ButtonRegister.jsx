import React from 'react'
import { Link } from "react-router-dom";
export default function ButtonRegister() {
  return (
      <Link to={"Register"}>
        <button className="boton-neon">Register</button>
      </Link>
  )
}
