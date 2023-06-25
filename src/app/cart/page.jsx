"use client";
import React from "react";
import styles from "./cart.module.css";
import Link from "next/link";

const Cart = () => {
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
          <p className={styles.hrP}>You have 4 items in your cart </p>

          {/* Product Card in Cart Page */}
          <div className={styles.productMain}>
            <img
              className={styles.productImg}
              src="https://overlays.co/cdn/shop/products/new55.jpg?v=1682003388&width=700"
              alt=""
            />
            <div>
              <p className={styles.productName}>
                Relexing Fit Mens free Spirit Tshirt
              </p>
            </div>
            <div className={styles.quentityPriceDeleteParent}>
              <div className={styles.btnParent}>
                <p>
                  <i className="fa-solid fa-minus mr-2 cursor-pointer "></i>
                </p>
                <p className={styles.productQuantity}>1</p>
                <p>
                  <i className="fa-solid fa-plus ml-2 cursor-pointer"></i>
                </p>
              </div>
              <div className={styles.priceParent}>
                <p className={styles.productPrice}>&#8377;799/-</p>
              </div>
              <div className={styles.dltbtnParent}>
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
          </div>
          
        </div>

         {/* Total bill Card in Cart page in right side of the page */}
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
