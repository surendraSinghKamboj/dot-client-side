"use client";
import React from "react";
import "./details.css";
import axios from "axios";
import { useState, useEffect } from "react";

const page = ({ params }) => {
  console.log(params.productId);
  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/api/v1/products/product/${params.productId}`
        );
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
 
  return (
    <>
      <div className="CompParent">
        <div className="DetailsParent">
          <div className="imgParent">
            <img className="img" src={products.mainImage} alt="" />
            <div className="sumImgContainer">
              { 
                products.otherImage && 
                products.otherImage.map((img, i) => <img key={i} className="subImg" src={img} alt="" />)
              }
            </div>
          </div>
          <div className="ContentParent">
            <p className="brandName">Draft of Thread Clothing</p>
            <h1 className="productName">{products.productName}</h1>
            <hr />
            <span className="currentprice">&#8377;{products.currentPrice}</span>
            <span className="mrpPrice">
              MRP <span className="subMrpPrice">&#8377;{products.mrp}</span>
            </span>{" "}
            <span className="percentOff">(65% OFF)</span>
            <p className="inclusiceTexas">inclusive of all taxes</p> <br />
            <p>Quantity:</p>
            <button className="quantitybutton">
              <span>-</span> {1} <span>+</span>
            </button>{" "}
            <br />
            <button className="AddToCartBtn">ADD TO CART</button> <br />
            <button className="butWithbtn">
              BUY WITH UPI/COD/CARDS
              <i className="fas fa-long-arrow-alt-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
