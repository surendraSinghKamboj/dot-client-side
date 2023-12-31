"use client"
import React from 'react'
import './Footer.css';
import logoImg from './dotFooterLogo.png';
import Image from "next/image";
import Link from 'next/link';
// import HiOfficeBuilding from 'react-icons/hi';
const Footer = () => {
  return (
    <div className='parent'>
        <div className='Container'>
              <div className='ComapnySection sub-container'>
                    <Image src={logoImg} className='logo' alt="Logo Img" />
                   {/* <h1 className='logo'>LOGO</h1> */}
                   <p className='aboutCompany'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit blanditiis, illo vel quidem quod earum dolore eum voluptas </p>
              </div>
              <div className='Products-Catagery sub-container'>
                   <h1 className='heading'>PRODUCTS CATEGORY</h1>
                    <p className='catageryItems'>Mens</p>
                    <p className='catageryItems'>Womens</p>
                    <p className='catageryItems'>Tshirts</p>
                    <p className='catageryItems'>Shirts</p>
                    <p className='catageryItems'>Hoodies</p>
                    <p className='catageryItems'>Sarees</p>

              </div>
              <div className='Usefull-links sub-container'>
                   <h1 className='heading usefullLinkParent'>USEFULL LINKS</h1>
                   <Link href={'/account/login'} className='usefullLinks'>Your Account</Link>
                    {/* <a className='usefullLinks' href="">Your Account</a> */}
                    <a className='usefullLinks' href="">Become the Seller</a>
                    <a className='usefullLinks' href="">FAQs</a>
                    <a className='usefullLinks' href="">Privacy Policy</a>
              </div>
              <div className='Contact sub-container'>
                   <h1 className='heading'>CONTACT</h1>
                    <div>
                       {/* <HiOfficeBuilding/> */}
                       <p className='contactInfo'><i className="fa-solid fa-location-dot"></i> Abc Street, Dehli,110001</p>
                       <p className='contactInfo'><i className="fa-solid fa-envelope"></i> support@ <br /> driftofthread.com</p>
                       <p className='contactInfo'><i className="fa-solid fa-phone"></i> +919898989898</p>
                    </div>

              </div>
        </div>
        <div className='followUs'>
          <h1 className='followUsheading'>Follow us on </h1>
          <div style={{fontSize:"20px"}}>
            <a className='followUsLogo' href=""><i className="fa-brands fa-facebook"></i></a>
            <a className='followUsLogo' href=""><i className="fa-brands fa-instagram"></i></a>
            <a className='followUsLogo' href=""><i className="fa-brands fa-linkedin"></i></a>
            <a className='followUsLogo' href=""><i className="fa-brands fa-twitter"></i></a>           
          </div>
        </div>
    </div>
  )
}

export default Footer
