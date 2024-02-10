"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediaCard from "./Card";

function CardCarousal({title, data}) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: 25 ,
  };

  return (
    <div className=" flex flex-col">
      <h1 className=" text-4xl font-semibold mb-8 ml-20 mt-14">{title}</h1>
      <Slider {...settings} className=" ">
        {data?.results.slice(0, 10).map((item)=> {
          return (
            <MediaCard
              title={item.title ? item.title : item.original_name}
              overview={item.overview.slice(0, 150)}
              releseDate={item.release_date ? item.release_date: item.first_air_date}
              image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              data= {item}
            />
          );
        })}
        {/* <MediaCard data = {movieData}/>
        <MediaCard data = {movieData}/>
        <MediaCard data = {movieData}/>
        <MediaCard data = {movieData}/>
        <MediaCard data = {movieData}/>
        <MediaCard data = {movieData}/> */}
      </Slider>
    </div>
  );
}

export default CardCarousal;
