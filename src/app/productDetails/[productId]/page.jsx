"use client";
import React from "react";
import "./details.css";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductbyId = ({ params }) => {
  let paramsId = params.productId;
  console.log(params.productId);
  const [products, setProducts] = useState({}); //For keeping api fetched data
  const [qtyCount, setQtyCount] = useState(1);  //For keeping current Quantity of the product
  const [productDataLS, setProductDataLS] = useState([]);

  // Featching api endPoint from backEnd
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
  
  // Product quantity increment and decrement functions
  const DecreaseProductQuantity = () => {
    if (qtyCount > 1) {
      setQtyCount(qtyCount - 1);
    }
  };
  const IncreaseProductQuantity = () => {
    if (qtyCount < 10) {
      setQtyCount(qtyCount + 1);
    }
  };

  //adding product detaiils into the Local Storage so that we can get this data in cart page
  // const addToCart = () => {
  //   localStorage.setItem("CartProductId", JSON.stringify(productInLs));
  //   alert("Product Id added to LocalStorage");
  // };
  
  useEffect(() => {
    // !localStorage.getItem('ProductDetails') ?  null :
    localStorage.setItem('ProductDetails', JSON.stringify(productDataLS));
  }, [productDataLS]);

  const handleAddObject = () => {
    const productObj = {
         productId:products._id,
         productMainImage: products.mainImage,
         productName: products.productName,
         productQuantity:qtyCount, 
         productCurrentPrice: products.currentPrice  
    };
    setProductDataLS([...productDataLS, productObj]);
    alert("Product Id added to LocalStorage");
  };
  return (
    <>
      <div className="CompParent">
        <div className="DetailsParent">
          <div className="imgParent">
            <img className="img" src={products.mainImage} alt="" />
            <div className="sumImgContainer">
              {products.otherImage &&
                products.otherImage.map((img, i) => (
                  <img key={i} className="subImg" src={img} alt="" />
                ))}
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
              <span onClick={DecreaseProductQuantity} className="pr-4 text-3xl">
                -
              </span>
              <span className="text-2xl"> {qtyCount}</span>{" "}
              <span
                onClick={IncreaseProductQuantity}
                className="pl-4  text-4xl"
              >
                +
              </span>
            </button>{" "}
            <br />
            <button className="AddToCartBtn" onClick={handleAddObject}>
              ADD TO CART
            </button>{" "}
            <br />
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

export default ProductbyId;
