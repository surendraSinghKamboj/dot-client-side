'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';


function TopImgSlider() {
  return (
    <>
    <Carousel className=' mt-0' interval={3000}>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://overlays.co/cdn/shop/files/desktop_banner4_new.jpg?v=1683311796&width=2000"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First</h3>
          <p>Content</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://overlays.co/cdn/shop/files/Overlays_web_Banner_summer_1.jpg?v=1680191666&width=2000"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second</h3>
          <p>Content</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default TopImgSlider;