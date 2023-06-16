"use client";
import GallerySliderOne from "./Components/GallerySliderOne";
import TopImgSlider from "./Components/TopImgSlider";
import Navbar from "./Components/header/Navbar";

function page() {
  return (
    <> 
      <Navbar />
      <TopImgSlider />
      <GallerySliderOne />
    </>
  );
}

export default page;
