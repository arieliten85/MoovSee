import React, { Component } from "react";
import Slider from "react-slick";

import MovieSimilar from "../component/MovieSimilar";

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
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 810,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 1267,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
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
