import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import {Link} from 'react-scroll';

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header">
                <span className='stroke-text'>Ready to start</span>
                <span>your journey</span>
                <span className='stroke-text'>now with us</span>
            </div>
            {/* plans card */}
            <div className='plans'>
                {
                    plansData.map((plan, i) => (
                        <div className="plan" key={i}>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>

                            <div className="features">
                                {plan.features.map((feature, i) => (
                                    <div className="feature">
                                        <img src={whiteTick} alt="" />
                                        <span key={i}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <span>See More Benefit -{'>'}</span>
                            </div>
                            <Link 
                            to='testimonials'
                            span={true}
                            smooth={true}
                            >
                            <button className="btn">Join Now</button>
                            </Link>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default Plans;