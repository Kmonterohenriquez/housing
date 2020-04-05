import React from 'react'
import './NewLiving.sass'
import image_4 from '../../img/image-04.jpg'
const NewLiving = () => {
    return (
        <div className='NewLiving'>
            <div className='NewLiving-container sm-container'>
                <div className="dotted-bg"></div>
                <div className="left-side">
                    <h1 className='NewLiving-title'>New Living For Your Dreaming</h1>
                    <p className='NewLiving-text'>Where you and your family can live their dreaming house with the most luxury houses you've ever seen.</p>
                    <button><a href="/">Contact Us</a></button>
                </div>
                <div className="right-side">
                    <img src={image_4} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default NewLiving
