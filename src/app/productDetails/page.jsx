import React from 'react';
import './details.css';
import Image from 'next/image';

const page = () => {
  return (
    <div className='CompParent'>
       <div className='DetailsParent'>
           <div className='imgParent'>
              <Image className='img' src="https://overlays.co/cdn/shop/products/CopyofDSC01567.jpg?v=1680197290&width=800" alt="" />
              <div className='sumImgContainer'>
                  <Image className='subImg' src="https://overlays.co/cdn/shop/products/CopyofDSC01567.jpg?v=1680197290&width=800" alt="" />
                  <Image className='subImg' src="https://overlays.co/cdn/shop/products/CopyofDSC01567.jpg?v=1680197290&width=800" alt="" />
                  <Image className='subImg' src="https://overlays.co/cdn/shop/products/CopyofDSC01567.jpg?v=1680197290&width=800" alt="" />
              </div>
           </div>
           <div className='ContentParent'>
               <p className='brandName'>Draft of Thread Clothing</p>
               <h1 className='productName'>Relaxed Fit Mens Free Spirit Tshirt</h1>
                <hr />
               <span className='currentprice'>&#8377;790.00</span><span className='mrpPrice'>MRP <span className='subMrpPrice'>&#8377;790.00</span></span> <span className='percentOff'>(65% OFF)</span>
               <p className='inclusiceTexas'>inclusive of all taxes</p> <br />
                 <p>Quantity:</p>
                 <button className='quantitybutton'><span>-</span> {1} <span>+</span></button> <br />
                <button className='AddToCartBtn'>ADD TO CART</button> <br />
                <button className='butWithbtn'>BUY WITH UPI/COD/CARDS 
                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                </button>
           </div>
       </div>
    </div>
  )
}

export default page
