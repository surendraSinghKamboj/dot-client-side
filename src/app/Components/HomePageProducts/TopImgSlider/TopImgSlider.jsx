"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

function TopImgSlider() {
  const [slideImg, setSlideImg] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/slider/slider/files"
        );
        setSlideImg(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Carousel className=" mt-0" interval={3000}>
        {slideImg.map((slide, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={slide.slidePath}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First</h3>
                <p>Content</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default TopImgSlider;
