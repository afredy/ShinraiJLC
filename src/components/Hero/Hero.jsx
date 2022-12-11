import React from 'react'
import { Header } from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import Butterfly from '../../assets/Butterfly.png'
import graduate from '../../assets/graduate.png'
import {motion} from "framer-motion"
import NumberCounter from "number-counter" 
import { Link } from 'react-scroll'



const Hero = () => {
    const transition = {type: 'spring', duration : 3}
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
                        <span>
                            <NumberCounter end={140} start={100} delay={2} prefix="+" />
                        </span>
                        <span>expert coaching</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={978} start={900} delay={4} prefix="+" />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={50} start={20} delay={1} prefix="+" />
                        </span>
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
                <button className="btn">
                <Link
                to='testimonials'
                span={true}
                smooth={true}
                >
                    Join Now
                </Link>
                </button>
                <motion.div
                initial={{right:"-8rem"}}
                whileInView={{right:"-5rem"}}
                transition={transition}
                 className="heart-rate">
                    <img src={graduate} alt="" />
                    <span>Learn </span>
                    <span>Lead</span>
                </motion.div>
                {/* Hero image section */}

                <img src={Butterfly} alt="" className="hero-image" />

                <motion.img
                 initial={{right:"10rem"}}
                 whileInView={{right:"16.8rem"}}
                 transition={transition}
                 src={hero_image_back} alt="" className="hero-image-back" />
                {/*END of Hero image section */}
                
                {/*Calorie section */}
                <motion.div 
                initial={{right:"40rem"}}
                whileInView={{right:"35rem"}}
                transition={transition}
                className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Effort Level</span>
                        <span>100%</span>
                    </div>
                </motion.div>


            </div>

        </div>
    );
}

export default Hero 