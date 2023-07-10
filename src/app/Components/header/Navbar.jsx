'use client'
import React, { useState } from 'react'
import './Navbar.css';
import Link from 'next/link';
import SearchBar from './Search/SearchBar';
import SearchResultSuggestions from './Search/SearchResultSuggestions';

 
const Navbar = () => {
  const [resultSuggestion,setResultSuggestion] = useState([]);
  return (
    <div>
        <div className='Navbar'>
          <div className='left'>
            <ul className='leftSideItems'>
             <Link href={'/'}><li>LOGO</li></Link>  
            </ul>
          </div>
          <div className='right'>
             <div className='flex flex-col justify-center '>
                <SearchBar setResultSuggestion={setResultSuggestion}/>
                <SearchResultSuggestions resultSuggestion={resultSuggestion}/>
             </div>
              <Link href={'/account/login'}><p className='Login'><i className="fa-solid fa-user"></i></p></Link>
              <Link href={'/cart'}><p className='Cart'><i className="fa-solid fa-cart-shopping"></i></p> </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar
