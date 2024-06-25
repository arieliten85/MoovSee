import React, { useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../utils/custom-hooks";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";

export default function Registre() {
  const { mostrarAlerta, msg } = useContext(UserContext);

  const name = useInput();
  const password = useInput();
  const email = useInput();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name.value, email.value, password.value].includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    showLoading();

    axios
      .post("https://moseesee-back.herokuapp.com/api/users/register", {
        name: name.value,
        email: email.value,
        password: password.value,
      })
      .then(() => {
        Alerta("Successfully Registered User", "success");

        setTimeout(() => {
          navigate("/login");
        }, 4000);
      })
      .catch(() => {
        Alerta("Error Registered User", "error");
      });
  };

  const Alerta = (mensaje, stado) => {
    Swal.fire({
      icon: stado,
      title: mensaje,
      showConfirmButton: false,
      timer: 3500,
    });
  };

  const showLoading = () => {
    Swal.fire({
      title: "Loading...",
      allowOutsideClick: false,
      showConfirmButton: false,
      timer: 3500,
      willOpen: () => {
        Swal.showLoading();
      },
    });
  };

  return (
    <div className="formContent">
      <form className="formBox" onSubmit={handleSubmit}>
        <h1 className="">Register Account</h1>
        <input type="text" placeholder="Name" {...name} />
        <input type="email" placeholder="E-mail" {...email} />
        <input type="password" placeholder="Password" {...password} />
        <p>
          {" "}
          If you have an account? click<Link to={"/Login"}> here</Link>
        </p>
        <input
          className="button"
          type="submit"
          value="Register"
          onClick={() => {}}
        />

        {!msg ? "" : <p className="error">{msg}</p>}
      </form>
    </div>
  );
}
