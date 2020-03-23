import React from 'react'
import image_5 from '../../img/image-05.jpg'
import './Developing.sass'

const Developing = () => {
    return (
        <div className='Developing'>
            <h1 className="Developing-title">Developing Process</h1>
            <div className="content">
                <div className="left-side">
                    <img src={image_5} alt="developing"/>
                </div>
                <div className="right-side">
                    <div className="box">
                        <h1 className="phase-title"> Phase #1</h1>
                        <p className='sub-title'>Building A <span>Completed</span></p>
                        <p className="text">
                        Fusce pretium dui quis est pretium lobortis. Vestibulum eu ex sed nibh condimentum tristique eu finibus lorem. Nullam sed eleifend massa.
                        </p>
                    </div>
                    <div className="box">
                        <h1 className="phase-title"> Phase #2</h1>
                        <p className='sub-title'>Building B <span>Completed</span></p>
                        <p className="text">
                        Fusce pretium dui quis est pretium lobortis. Vestibulum eu ex sed nibh condimentum tristique eu finibus lorem. Nullam sed eleifend massa.
                        </p>
                    </div>
                    <div className="box">
                        <h1 className="phase-title"> Phase #3</h1>
                        <p className='sub-title'>Building C <span className='grey'>In Progress</span></p>
                        <p className="text">
                        Fusce pretium dui quis est pretium lobortis. Vestibulum eu ex sed nibh condimentum tristique eu finibus lorem. Nullam sed eleifend massa.
                        </p>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Developing
