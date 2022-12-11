import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import Shinraii from "../../assets/Shinraii.png"
import { Link } from 'react-scroll'
// import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img onClick={()=> window.open("https://github.com/ShinraiJLC", "_blank")} src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img onClick={()=> window.open("https://www.linkedin.com/in/shinrai-jlc-9713a825a/", "_blank")} src={Linkedin} alt="" />
                </div>
                <div className="logo-f">
                    <Link
                        to='header'
                        span={true}
                        smooth={true}
                    >
                        <img src={Shinraii} className ="f-logo" alt="" />
                    </Link>
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    )
}

export default Footer