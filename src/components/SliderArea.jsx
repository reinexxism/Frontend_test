import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderContent from "./SliderContent";
import { SliderContainer } from "../styles/SliderStyle";

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
        <SliderContent
          text="[M COUNTDOWN] 10월 2주차 엠카 사전..."
          date="2020.02.08 10:00 ~ 2020.04.08 17:00(KST)"
          imgPath="src/assets/first_slide.png"
        />
        <SliderContent
          text="2번째 슬라이드 제목"
          date="2번째 슬라이드 날짜"
          imgPath=""
        />
        <SliderContent
          text="3번째 슬라이드 제목"
          date="3번째 슬라이드 날짜"
          imgPath=""
        />
        <SliderContent
          text="4번째 슬라이드 제목"
          date="4번째 슬라이드 날짜"
          imgPath=""
        />
        <SliderContent
          text="5번째 슬라이드 제목"
          date="5번째 슬라이드 날짜"
          imgPath=""
        />
      </Slider>
    </SliderContainer>
  );
}
