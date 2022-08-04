import React, { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function BannerContenedor() {
  const { moviesBanner } = useContext(MovieContext);
  const topFive = moviesBanner.slice(6, 11);
  return (
    <>
      <div class="container-all">
        <input type="radio" id="1" name="image-slide" hidden />
        <input type="radio" id="2" name="image-slide" hidden />
        <input type="radio" id="3" name="image-slide" hidden />
        <input type="radio" id="4" name="image-slide" hidden />

        <div class="slide">
          {topFive.map((item) => (
            <>
              <div class="item-slide">
                <div className="boxInfo">
                  <div className="contenedorInfoBanner">
                    <div>
                      <h1>{item.title}</h1>
                    </div>
                    <div className="boxRating">
                      <p className="votoTop  ">
                        {item.vote_average}/
                        <span style={{ fontSize: "17.9px" }}>10</span>
                      </p>
                      <p className="horaTop texto">
                        {Math.ceil(Math.random() * 2)}h:
                        {Math.ceil(Math.random() * 60)} min
                      </p>
                      <p className="añoTop texto">
                        {item.release_date.substring(0, 4)}
                      </p>
                    </div>
                    <div>
                      <p className="desc ">{item.overview}</p>
                    </div>

                    <Link to={`/movie/${item.id}`}>
                      <button>
                       
                        <FaPlay /> See Movie
                      </button>
                    </Link>
                  </div>
                </div>

                <img
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                />
              </div>
            </>
          ))}
        </div>

        <div class="pagination">
          <label class="pagination-item" for="1"></label>
          <label class="pagination-item" for="2"></label>
          <label class="pagination-item" for="3"></label>
          <label class="pagination-item" for="4"></label>
        </div>
      </div>
    </>
  );
}
