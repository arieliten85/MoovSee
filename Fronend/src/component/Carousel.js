import React, { Component } from "react";
import Slider from "react-slick";

import MovieSimilar from "./MovieSimilar";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      infinite: true,
      responsive: [
        {
          breakpoint: 470,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 580,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        {this.props.similarFive.map((movie) => (
          <MovieSimilar key={movie.id} movie={movie} />
        ))}
      </Slider>
    );
  }
}
