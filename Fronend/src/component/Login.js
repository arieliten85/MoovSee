import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import useInput from "../utils/custom-hooks";
import swal from "sweetalert2";

export default function Login() {
  const { toggleAuth } = useContext(UserContext);
  const { mostrarAlerta, msg, isAuthenticated } = useContext(UserContext);
  const [error, setError] = useState(true);
  const navigate = useNavigate();
  const password = useInput();
  const email = useInput();

  const Alerta = () => {
    swal.fire({
      icon: "success",
      title: "Successful operation",
      text: "It's nice to have you back",
      showConfirmButton: false,
      timer: 3500,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([email.value, password.value].includes("")) {
      mostrarAlerta({
        msg: "All fields are required",
        error: true,
      });
      return;
    }

    axios
      .post("https://moseesee-back.herokuapp.com/api/users/login", {
        
        email: email.value,
        password: password.value,
      })
      .then((resp) => {
        toggleAuth(resp.data);
      })
      .catch((err) => setError(err.response.request.withCredentials));
  };
  useEffect(() => {
    if (error === false) {
      mostrarAlerta({
        msg: "Error loading your data, please check the fields",
      });

      setError(true);
      return;
    }
  }, [error]);

  if (isAuthenticated) {
    Alerta();
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }

  return (
    <div className="formContent">
      <form className="formBox" onSubmit={handleSubmit}>
        <h1 className="">Sign in</h1>
        <input type="email" placeholder="E-mail" {...email} />
        <input type="password" placeholder="Password" {...password} />
        <p> You are not Registered? click <Link to={"/register"}> here</Link></p>
        <input
          className="button"
          type="submit"
          value="Login"
          // onClick={() => {}}
        />
        {!msg ? "" : <p className="error">{msg}</p>}
      </form>
    </div>
  );
}
