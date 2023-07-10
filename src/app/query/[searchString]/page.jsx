"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const SearchResultsPage = ({ params }) => {
  console.log(params.searchString);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = (value) => {
      fetch(
        `http://localhost:4001/api/v1/products/search/${params.searchString}`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setResults(json);
        });
    };
    fetchData();
  }, []);
  const ButtonClick = () => {};
  return (
    <div>
      <h1>{`Search Result For ${params.searchString}`} </h1>
      <div className={styles.productParent}>
        {results.map((result, i) => {
          return (
            <div key={result._id}>
              <div className="container mt-10 flex flex-col justify-center items-center gap-5">
                <div
                  style={{ height: "499px", width: "327px" }}
                  className={styles.imageContainer}
                >
                  <img
                    className=" w-full h-full rounded-md "
                    src={result.mainImage}
                    alt=""
                  />
                  <div className={styles.imageButtonParent}>
                    <Link href={`../productDetails/${result._id}`}>
                      <button className={styles.imageButton} onClick={ButtonClick}>
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
                <div className={styles.nameAndPriceText}>
                  <p className=" md:mt-3 md:mb-2 mt-0 ">
                    {result.productName}
                  </p>
                  <p>&#8377; {result.currentPrice}/-</p>
                </div>
                <div className={styles.cartAndBuyBtn}>
                  <button className={styles.addToCart}>Add to Cart</button>
                  <button className={styles.buyNow}>Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultsPage;
