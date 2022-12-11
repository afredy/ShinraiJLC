import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'
import {Link} from 'react-scroll'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* header section */}
        <div className="program-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>To shape you</span>
        </div>

      <div className='program-categories'>
        {programsData.map(
          program=>(
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
              <Link 
                            to='testimonials'
                            span={true}
                            smooth={true}
                            >
                <span>Join Now</span>
                </Link>
                <img src={rightArrow} alt="" />
              </div>
            </div>
          )
        )}
      </div>
    </div>

  )
}

export default Programs