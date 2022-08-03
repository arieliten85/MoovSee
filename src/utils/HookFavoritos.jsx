import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import axios from "axios";
import { useParams } from "react-router";

export default function HookFavoritos({ movieSelect, category, id }) {
  const { idMovi, categoria } = useParams();

  const { user, isAuthenticated } = useContext(UserContext);
  const [existe, SetExiste] = useState(Boolean);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:4000/api/favourite/${user.id}/${category}/${id}`)
        .then((res) => SetExiste(res.data.success))
        .catch((err) => console.log(err.response.data.success));
    }
  }, [user]);

  const eliminarFavoritos = () => {
    const id = movieSelect.id;
    const idUser = user.id;

    axios
      .delete(`http://localhost:4000/api/favourite/${idUser}/${id}/delete`)
      .then(() => {})
      .catch((err) => console.log(err));

    SetExiste(false);
  };

  const agregarFavoritos = () => {
    const id = movieSelect.id;
    axios.post("http://localhost:4000/api/favourite/add", {
      id: id,
      title: movieSelect.original_title,
      poster_path: movieSelect.poster_path,
      description: movieSelect.overview,
      user: user.id,
      category: category,
    });

    SetExiste(true);
  };

  return (
    <div className={!idMovi ? "contenedorRatingFav2" : "contenedorRatingFav"}>
      {!isAuthenticated ? (
        ""
      ) : (
        <>
          {!existe ? (
            <div
              className={!idMovi ? "itemBotton2" : "itemBotton"}
              onClick={agregarFavoritos}
            >
              <div className={!idMovi ? "corazon2" : "boxCorazon"}>
                <AiFillHeart className="cf" />
              </div>

              {idMovi ? (
                <div>
                  <p>Add to favourites</p>
                </div>
              ) : (
                ""
              )}

              {/* <Toaster
                containerStyle={{
                  position: "absolute",
                  top: "60px",
                  left: "0px",
                  bottom: 0,
                  width: "90%",

                  // height: "50px",
                }}
                toastOptions={{
                  // Define default options
                  className: "",
                  duration: 2000,
                  style: {
                    background: "#363636",
                    color: "#fff",
                  },
                }}
              /> */}
            </div>
          ) : (
            <div
              className={!idMovi ? "itemBotton2" : "itemBotton"}
              onClick={eliminarFavoritos}
            >
              <div className={!idMovi ? "corazonDelete" : "boxCorazon"}>
                <AiFillHeart className="sf" />
              </div>

              {idMovi ? (
                <div>
                  <p>Remove from favourites</p>{" "}
                </div>
              ) : (
                ""
              )}

              {/* <Toaster
                containerStyle={{
                  position: "absolute",
                  top: "60px",
                  left: "0px",
                  bottom: 20,
                  right: 0,
                  width: "100%",

                  // height: "50px",
                }}
                toastOptions={{
                  // Define default options

                  duration: 2000,
                  style: {
                    background: "#363636",
                    color: "#fff",
                  },
                }}
              /> */}
            </div>
          )}
        </>
      )}
    </div>
  );
}
