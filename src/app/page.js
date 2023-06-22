"use client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import GallerySliderOne from "./Components/GallerySliderOne";
import TopImgSlider from "./Components/TopImgSlider";
 

function page() {
  return (
    <> 
      <TopImgSlider />
      <GallerySliderOne />
    </>
  );
}

export default page;
