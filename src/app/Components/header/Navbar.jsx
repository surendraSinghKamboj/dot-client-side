import React from 'react'
import './Navbar.css';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
        <div className='Navbar'>
          <div className='left'>
            <ul className='leftSideItems'>
              <li>Home</li>
              <li>Shop All</li>
              <li>Shop Man</li>
              <li>Shop Women</li>
              <li>Get in Touch!</li>
            </ul>
          </div>
          <div className='mid'>
              <h3 className='middleLogo'>Logo</h3>
          </div>
          <div className='right'>
              <p className='Search'>Search</p>
              <Link href={'/account/login'}><p className='Login'>Login</p></Link>
              <p className='Cart'>Cart</p>
          </div>
        </div>
    </div>
  )
}

export default Navbar
