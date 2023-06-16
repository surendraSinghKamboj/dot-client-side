"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import productData from "./ProductData";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1424 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1424, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 740 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 740, min: 0 },
    items: 1,
  },
};

const GallerySliderOne = () => {
  const ButtonClick = () => {
    alert("Hello");
  };
  return (
    <div className=" mr-10 ml-10 ">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={window.deviceType !== "mobile" ? true : false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {productData.map((data, i) => {
          return (
            <div key={i}>
              <div className="container mt-10 flex flex-col justify-center items-center gap-5">
                <div
                  style={{ height: "499px", width: "327px" }}
                  className="image-container"
                >
                  <img
                    className=" w-full h-full rounded-md "
                    src={data.imgUrl1}
                    alt=""
                  />
                  <div className="image-button-parent">
                    <button className="image-button" onClick={ButtonClick}>
                      View Details
                    </button>
                  </div>
                </div>
                <div className=" text-center">
                  <p className=" md:mt-3 md:mb-2 mt-0 ">{data.name}</p>
                  <p>&#8377; {data.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default GallerySliderOne;
