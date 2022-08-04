import React, { useState, useContext } from "react";
import ButtonLogin from "../ButtonLogin";
import Search from "../serch/Search";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { FaUserCircle } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
export default function Nav() {
  const { setIsLoogedId, isAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleClickLogOut = async () => {
    try {
      await axios.post("http://localhost:4000/api/users/logout");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }

    setIsLoogedId({});
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to={"/"}>
          <div className="boxLogo">
            <div className="boxLine">
              <div className="line1"></div>
              <MdLocalMovies className="iconoLogo" />
              <div className="line2"></div>
            </div>
            <h1 className="textoLogo">MooSee</h1>
          </div>
        </Link>

        <div className={click ? "nav-menu active" : "nav-menu"}>
          <div>
            <Search />
          </div>

          <Link to={"/"}>
            <div className="nav-item">
              <h2 className="nav-links ">HOME</h2>
            </div>
          </Link>
          <Link to={"/movie"}>
            <div className="nav-item">
              <h2 className="nav-links ">MOVIES</h2>
            </div>
          </Link>
          <Link to={"/serie"}>
            <div className="nav-item">
              <h2 className="nav-links ">SERIES</h2>
            </div>
          </Link>

          {!isAuthenticated ? (
            <>
              <ButtonLogin />
            </>
          ) : (
            <>
              <Link to={"/user/favoritos"}>
                <div className="">
                  <h2 className="nav-links perfil ">
                    <FaUserCircle />
                  </h2>
                </div>
              </Link>

              <div>
                <button className="boton_logOut" onClick={handleClickLogOut}>
                  Logout
                </button>
              </div>
            </>
          )}
        </div>

        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <i className="material-icons fas fa-times nav-icon">close</i>
          ) : (
            <i className="material-icons fas fa-bars nav-icon">menu</i>
          )}
        </div>
      </div>
    </nav>
  );
}
