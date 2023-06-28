'use client'
import React from 'react'
import './Navbar.css';
import Link from 'next/link';
import { useState,useEffect } from 'react';
 
const Navbar = () => {
  const [data, setData] = useState([]);
  const [searchInput,setSearchInput] = useState('');
  const [searchValue,setSearchValue] = useState([]);

  const SearchBtn=()=>{
       setSearchValue(searchInput);
  }
  // featching api from backend for search result
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4001/api/v1/products/search/${searchValue}`);
        const jsonData = await response.json();
        setData(jsonData);
        // console.log(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [searchValue]);

  return (
    <div>
        <div className='Navbar'>
          <div className='left'>
            <ul className='leftSideItems'>
             <Link href={'/'}><li>LOGO</li></Link>  
            </ul>
          </div>
          <div className='right'>
              <input type="text" onChange={(e)=>{setSearchInput(e.target.value)}} className=' bg-gray-400 text-white' style={{margin:"-13px -8px 0 0", borderRadius:"7px",width:"150px"}} />
              <p className='Search'><i onClick={SearchBtn} className="fa-solid fa-magnifying-glass cursor-pointer"></i></p>
              <Link href={'/account/login'}><p className='Login'><i className="fa-solid fa-user"></i></p></Link>
              <Link href={'/cart'}><p className='Cart'><i className="fa-solid fa-cart-shopping"></i></p> </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar
