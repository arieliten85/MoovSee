import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import MovieSimilarList from "../MovieSimilarList";
import { useParams } from "react-router";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import ReactStars from "react-stars";

import toast, { Toaster } from "react-hot-toast";

export default function MovieSelect({ movieSelect }) {
  const { user, isAuthenticated } = useContext(UserContext);
  const { id, categoria } = useParams();
  const [existe, SetExiste] = useState(Boolean);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://moseesee-back.herokuapp.com/api/favourite/${user.id}/${categoria}/${id}`
        )
        .then((res) => SetExiste(res.data.success));
      //.catch((err) => console.log(err.response.data.success));
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://moseesee-back.herokuapp.com/api/favourite/${user.id}/${categoria}/${id}`
        )

        .then((res) => SetExiste(res.data.success))
        .catch((err) => console.log(err.response.data.success));
    }
  }, [user]);

  const eliminarFavoritos = () => {
    const id = movieSelect.id;
    const idUser = user.id;

    axios
      .delete(
        `https://moseesee-back.herokuapp.com/api/favourite/${idUser}/${id}/delete`
      )
      .then(() => {})
      .catch((err) => console.log(err));

    SetExiste(false);
    notifyDelete();
  };

  const agregarFavoritos = () => {
    const id = movieSelect.id;
    axios.post("https://moseesee-back.herokuapp.com/api/favourite/add", {
      id: id,
      title: movieSelect.original_title,
      poster_path: movieSelect.poster_path,
      description: movieSelect.overview,
      user: user.id,
      category: categoria,
    });

    SetExiste(true);

    notifyAdd();
  };

  const notifyAdd = () =>
    toast.success("added to favorites", {
      duration: 1500,
      position: "top-center",

      iconTheme: {
        primary: "green",
        secondary: "#fff",
      },

      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  const notifyDelete = () =>
    toast.success("Removed from Favorites", {
      duration: 1500,
      position: "top-center",
      iconTheme: {
        primary: "green",
        secondary: "#fff",
      },

      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  return (
    <>
      <div
        className="main "
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movieSelect.backdrop_path}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="imageBox">
          <img
            className="movieImageSelect"
            src={`https://image.tmdb.org/t/p/original${movieSelect.poster_path}`}
            alt="Placeholder"
          />
          <div className="infoBox">
            <div>
              <h4 className="title">
                {categoria === "movie"
                  ? movieSelect.title
                  : movieSelect.original_name}
              </h4>
            </div>
            <div>
              <p>{movieSelect.overview}</p>
            </div>
            <div className="contenedorRatingFav">
              <div>
                <h2>Rating:</h2>
              </div>
              <div className="boxStart">
                <ReactStars
                  activeColor="red"
                  size={40}
                  count={5}
                  isHalf={true}
                  value={(movieSelect.vote_average * 50) / 100}
                />
              </div>

              {!isAuthenticated ? (
                ""
              ) : (
                <>
                  {!existe ? (
                    <div className="itemBotton " onClick={agregarFavoritos}>
                      <div className="boxCorazon">
                        <AiOutlineHeart className="cf" />
                      </div>
                      <div>
                        <p>Add to favourites</p>
                      </div>

                      <Toaster
                        containerStyle={{
                          position: "absolute",
                          top: "60px",
                          left: "0px",
                          bottom: 0,
                          width: "100%",
                          fontSize: "14px",
                        }}
                        toastOptions={{
                          duration: 2000,
                          style: {
                            background: "#363636",
                            color: "#fff",
                          },
                        }}
                      />
                    </div>
                  ) : (
                    <div className="itemBotton " onClick={eliminarFavoritos}>
                      <div className="boxCorazon">
                        <AiFillHeart className="sf" />
                      </div>
                      <div>
                        <p>Remove from favourites</p>
                      </div>

                      <Toaster
                        containerStyle={{
                          position: "absolute",
                          top: "60px",
                          left: "0px",
                          bottom: "20px",
                          right: 0,
                          width: "100%",
                          fontSize: "14px",
                        }}
                        toastOptions={{
                          duration: 2000,
                          style: {
                            background: "#363636",
                            color: "#fff",
                          },
                        }}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <MovieSimilarList />
      </div>
    </>
  );
}
