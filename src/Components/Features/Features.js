import React from 'react'
import './Features.sass'
import bg from '../../img/pattern-topo.png'
import image_1 from '../../img/image-01.jpg'
import image_2 from '../../img/image-02.jpg'
import image_3 from '../../img/image-03.jpg'

const Features = () => {
    return (
        <div className='Features'>
            <img src={bg} alt="features-background" className='bg-features'/>
            <div className=" container">
                <h1 className='title'> What You'll Get</h1>
                <div className="box-container">
                    <div className="box">
                        <img src={image_1} alt=""/>
                        <h1 className="name">Beautiful<br/>Interiors</h1>
                    </div>
                    <div className="box">
                        <img src={image_2} alt=""/>
                        <h1 className="name">Parking and<br/>Shopping</h1>
                    </div>
                    <div className="box">
                        <img src={image_3} alt=""/>
                        <h1 className="name">Wellness and<br/>Relax places</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
