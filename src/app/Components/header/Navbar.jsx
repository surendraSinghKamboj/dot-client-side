import React from 'react'
import './Navbar.css';
import Link from 'next/link';
const Navbar = () => {
   
  return (
    <div>
        <div className='Navbar'>
          <div className='left'>
            <ul className='leftSideItems'>
             <Link href={'/'}><li>Home</li></Link>  
            </ul>
          </div>
          <div className='mid'>
              <h3 className='middleLogo'>Logo</h3>
          </div>
          <div className='right'>
              <p className='Search'>Search</p>
              <Link href={'/account/login'}><p className='Login'>Login</p></Link>
              <Link href={'/cart'}><p className='Cart'>Cart</p></Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar
