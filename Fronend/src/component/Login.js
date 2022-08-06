import React, { useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import useInput from "../utils/custom-hooks";
import Swal from "sweetalert2";

export default function Login() {
  const { toggleAuth } = useContext(UserContext);
  const { mostrarAlerta, msg } = useContext(UserContext);
  
  const navigate = useNavigate();
  const password = useInput();
  const email = useInput();

  
    const Alerta = (mensaje, stado, subMensaje) => {
    Swal.fire({
      icon: stado,
      title: mensaje,
       text: subMensaje,
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
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([email.value, password.value].includes("")) {
      mostrarAlerta({
        msg: "All fields are required",
        error: true,
      });
      return;
    }
    
     showLoading();

    axios
      .post("https://moseesee-back.herokuapp.com/api/users/login", {
        
        email: email.value,
        password: password.value,
      })
      .then((resp) => {
        toggleAuth(resp.data);
        Alerta("Successful operation", "success","It's nice to have you back");
        
          setTimeout(() => {
          navigate("/");
        }, 4000);

      })
      .catch((err) => {
       Alerta("Error starting section, Please check your data", "error");
      });
  };
 

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
