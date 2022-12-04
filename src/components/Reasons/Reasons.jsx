import React from 'react'
import './Reasons.css'
import books from "../../assets/books.jpg"
import book2 from "../../assets/book2.png"
import book3 from "../../assets/book3.png"
import book4 from "../../assets/book4.jpg"
import foreignLanguage from "../../assets/foreignLanguage.png"
import language2 from "../../assets/language2.png"
import motivate from "../../assets/motivate.png"
import tick from "../../assets/tick.png"


const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={books} alt="" />
                <img src={book2} alt="" />
                <img src={book3} alt="" />
                <img src={book4} alt="" />
            </div>
            <div className="right-r">
                <span>Some reasons</span>
                <div>
                    <span className='stroke-text'>Why</span>
                    <span> Choose us?</span>
                </div>
                <div className='details-r'>
                    <div>
                        <img src={tick} alt="" />
                        <span>Over 140+ expert classes</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Train smarter and be punctual than before</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 free class for new member</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Be Fluent in Nihongo</span>
                    </div>
                </div>
                <span
                    style={{
                        color: "var(--gray)",
                        fontWeight: 'normal'
                    }}>OUR Services
                </span>
                <div className="partners">
                    <img src={foreignLanguage} alt="" />
                    <img src={language2} alt="" />
                    <img src={motivate} alt="" />
                </div>

            </div>
        </div>
    )
}
export default Reasons