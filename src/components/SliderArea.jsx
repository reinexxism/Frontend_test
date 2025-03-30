import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer } from "../SliderStyle";
import SliderContent from "./SliderContent";

export default function SliderArea() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const settings = {
    slide: "div",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    width: "425px",
    heihgt: "250px",
    margin: "0 auto",
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <SliderContent num="first" />
        <SliderContent num="second" />
        <SliderContent num="third" />
        <SliderContent num="fourth" />
        <SliderContent num="fifth" />
      </Slider>
    </SliderContainer>
  );
}
