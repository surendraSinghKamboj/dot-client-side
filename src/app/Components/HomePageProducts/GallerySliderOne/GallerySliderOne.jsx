"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import productData from "./ProductData";
import "./GallerySliderOne.css";
import Link from "next/link";
// import Image from "next/image";

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

const GallerySliderOne = ({ products }) => {
  const ButtonClick = () => {};
  return (
    <div className=" mr-2 ml-2 ">
      <Carousel
        responsive={responsive}
        infinite={true}
        // autoPlay={this.deviceType !== "mobile" ? true : false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {products.map((product, i) => {
          return (
            <div key={product._id}>
              <div className="container mt-10 flex flex-col justify-center items-center gap-5">
                <div
                  style={{ height: "499px", width: "327px" }}
                  className="image-container"
                >
                  <img
                    className=" w-full h-full rounded-md "
                    src={product.mainImage}
                    alt=""
                  />
                  <div className="image-button-parent">
                    <Link href={`./productDetails/${product._id}`}>
                      <button className="image-button" onClick={ButtonClick}>
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="nameAndPriceText">
                  <p className=" md:mt-3 md:mb-2 mt-0 ">
                    {product.productName}
                  </p>
                  <p>&#8377; {product.currentPrice}/-</p>
                </div>
                <div className="cart-and-buy-btn">
                  <button className="addToCart">Add to Cart</button>
                  <button className="buyNow">Buy Now</button>
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
