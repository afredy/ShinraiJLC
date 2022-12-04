import React from 'react'
import { Header } from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import Butterfly from '../../assets/Butterfly.png'
import graduate from '../../assets/graduate.png'



const Hero = () => {
    return (
        <div className="hero">
            <div className="blur blur-hero"></div>
            <div className="left-h">
                <Header />
                <div className="space-create">



                </div>
                {/* Shape your Ideal body section */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Build</span>
                        <span> Your</span>
                    </div>
                    <div>
                        <span>Career</span>
                    </div>
                    <div>
                        <span>In here we will help you to build your career for Japan to fulfill your dream
                        </span>
                    </div>
                </div>
                {/* END of Shape your Ideal body section */}
                {/* figures section */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coaching</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Language programs</span>
                    </div>
                </div>
                {/*END of figures section */}
                {/* hero button */}
                <div className="hero-button">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            {/* END of hero button */}
            {/* End of Left Section */}

            <div className="right-h">
                <button className="btn">Join Now</button>
                <div className="heart-rate">
                    <img src={graduate} alt="" />
                    <span>Learn </span>
                    <span>Lead</span>
                </div>
                {/* Hero image section */}

                <img src={Butterfly} alt="" className="hero-image" />
                <img src={hero_image_back} alt="" className="hero-image-back" />
                {/*END of Hero image section */}
                
                {/*Calorie section */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Effort Level</span>
                        <span>100%</span>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Hero 