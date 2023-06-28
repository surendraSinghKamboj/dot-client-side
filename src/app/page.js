"use client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import GallerySliderOne from "./Components/GallerySliderOne";
import TopImgSlider from "./Components/TopImgSlider";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function page() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
      const fetchData = async()=>{
          try{
            const response = await axios.get('http://localhost:4001/api/v1/products/get_all_Products');
            setProducts(response.data)
            // console.log(response.data)
          } catch(error){
              console.error('Error:',error);
          }
      }
      fetchData();
  },[])
  return (
    <> 
      <TopImgSlider />
      <GallerySliderOne products={products}/>
    </>
  );
}

export default page;
