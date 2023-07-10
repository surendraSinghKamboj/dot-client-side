'use client'
import React, { useEffect, useState } from "react";
import styles from "./cart.module.css";
import Link from "next/link";

const Cart = () => {
  const [productDataLS, setProductDataLS] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("ProductDetails");
    if (storedData) {
      setProductDataLS(JSON.parse(storedData));
    }
  }, []);

  const handleRemoveItem = (id) => {
    // Remove item with matching id
    const updatedProductData = productDataLS.filter(
      (product) => product.id !== id
    );
    setProductDataLS(updatedProductData);

    // Update data in local storage
    localStorage.setItem("ProductDetails", JSON.stringify(updatedProductData));
  };
  let total = productDataLS.productQuantity* productDataLS.length;
  return (
    <div className={styles.parentDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.left}>
          <Link
            href="/"
            className=" font-bold text-gray-600 inline-block ml-10 mt-4 text-xl "
          >
            <i className="fas fa-long-arrow-alt-left ms-2 mr-2 text-left"></i>
            Back to Home
          </Link>
          <hr className={styles.hr} />
          <p className={styles.hrP}>Shopping Cart</p>
          <p
            className={styles.hrP}
          >{`You have ${productDataLS.length} items in your cart`}</p>

          {/* Product Card in Cart Page */}
          {productDataLS.map((product, i) => {
            return (
              <div key={i} className={styles.productMain}>
                <img
                  className={styles.productImg}
                  src={product.productMainImage}
                  alt=""
                />
                <div>
                  <p className={styles.productName}>
                    {product.productName}
                  </p>
                </div>
                <div className={styles.quentityPriceDeleteParent}>
                  <div className={styles.btnParent}>
                    <p>
                      <i className="fa-solid fa-minus mr-2 cursor-pointer "></i>
                    </p>
                    <p className={styles.productQuantity}>
                      {product.productQuantity}
                    </p>
                    <p>
                      <i className="fa-solid fa-plus ml-2 cursor-pointer"></i>
                    </p>
                  </div>
                  <div className={styles.priceParent}>
                    <p className={styles.productPrice}>
                      &#8377;{product.productCurrentPrice * product.productQuantity}/-
                    </p>
                  </div>
                  <div
                    onClick={() => handleRemoveItem(product.id)} // Pass the product id to the handleRemoveItem function
                    className={styles.dltbtnParent}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total bill Card in Cart page in right side of the page */}
        {/* {productDataLS.map((product,i)=>{
               return(
                 <div>
                   <h1>{product.productQuantity*product.productCurrentPrice}</h1>
                 </div>
               )
        })} */}
        <div className={styles.right}>
          <p className={styles.cartTotal}>Cart Total : &#8377;799.00/-</p>
          <hr className={styles.carthr} />
          <div className={styles.subTotalParent}>
            <p>Subtotal</p>
            <p>&#8377;799.00</p>
          </div>
          <div className={styles.shippingFeeParent}>
            <p>Shipping Fee</p>
            <p>&#8377;20.00</p>
          </div>
          <div className={styles.totolParent}>
            <p>Total(incl. taxes)</p>
            <p>&#8377;819.00</p>
          </div>
          <div className={styles.proceedbtnParent}>
            <button className={styles.proceedbtn}>
              PROCEED TO CHECKOUT
              <i className="fas fa-long-arrow-alt-right ms-2 mr-2"></i>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
