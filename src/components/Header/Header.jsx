import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Shinraii from '../../assets/Shinraii.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

export const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <Link
      to='header'
      span={true}
      smooth={true}>
        <img src={Shinraii} alt="" className='logo' />
      </Link>
      {menuOpened == false && mobile == true ? (
        <div
        style={{
          backgroundColor: "var(--appColor)",
          padding : "0.4rem",
          borderRadius: "5px",
          opacity: "70%"

        }}

        onClick= {()=> setMenuOpened(true)}
        >
          <img src={Bars} alt=""  style={{width: '1.5rem', height:'1.5rem'}} />
        </div>
      ) : (
        <ul className='header-menu'>
          <li>
          <Link
          onClick={()=>setMenuOpened(false)}
          to = 'header'
          span={true}
          smooth={true}
          >
          Home
          </Link>
          </li>
          <li> 
          <Link
          onClick={()=>setMenuOpened(false)}
          to = 'programs'
          span={true}
          smooth={true}
          >
            Program
          </Link>
            </li>
          <li>
          <Link
          onClick={()=>setMenuOpened(false)}
          to = 'reasons'
          span={true}
          smooth={true}
          >
            Why Us
           </Link>
            </li>
          <li>
          <Link
          onClick={()=>setMenuOpened(false)}
          to = 'plans'
          span={true}
          smooth={true}
          >
            Plans
            </Link>
            </li>
          <li>
            <Link
            to='testimonials'
            span={true}
            smooth= {true}
            onClick={()=>setMenuOpened(false)}
            
            >
            Testimonials
            </Link>
            </li>
        </ul>
      )}
    </div>
  )
}

export default Header