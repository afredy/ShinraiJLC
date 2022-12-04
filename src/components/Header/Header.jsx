import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Shinraii from '../../assets/Shinraii.png'

export const Header = () => {
  return (
    <div className="header">
        <img src={Shinraii} alt="" className='logo'/>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Program</li>
            <li>Why Us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header