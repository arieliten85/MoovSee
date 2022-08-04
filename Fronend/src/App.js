import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as React from "react";
import { Route, Routes } from "react-router";
import Register from "./component/Register";
import Login from "./component/Login";
import Nav from "./component/navBar/Nav";
import "./styles/scss/app.scss";
import UserContext from "./context/UserContext";
import MovieListContainer from "./component/tmdb/MovieListContainer";
import MovieContext from "./context/MovieContext";
import MovieSelectContainer from "./component/tmdb/MovieSelectContainer";
import FavoritosContext from "./context/FavoritosContext";
import Me from "./component/profile/Me";
import SerieContext from "./context/SerieContext";

function App() {
  return (
    <>
      <FavoritosContext>
        <SerieContext>
          <MovieContext>
            <UserContext>
              <Nav />
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/:categoria" element={<MovieListContainer />} />
                <Route path="/:categoria/:id" element={<MovieSelectContainer />} />
                <Route path="/" element={<MovieListContainer />} />
                <Route path="/user/favoritos" element={<Me />} />
              </Routes>
            </UserContext>
          </MovieContext>
        </SerieContext>
      </FavoritosContext>
    </>
  );
}

export default App;
