import React from 'react'
import './NewLiving.sass'
import image_4 from '../../img/image-04.jpg'
const NewLiving = () => {
    return (
        <div className='NewLiving'>
            <div className='NewLiving-container sm-container'>
                {/* <img src="" alt=""/> */}
                <div className="left-side">
                    <h1 className='NewLiving-title'>New Living For Your Dreaming</h1>
                    <p className='NewLiving-text'>Fusce pretium dui quis est pretium lobortis. Vestibulum eu ex sed nibh condimentum tristique eu finibus lorem. Nullam sed eleifend massa. Morbi nulla turpis, pharetra et</p>
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
