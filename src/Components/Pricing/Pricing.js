import React from 'react'
import './Pricing.sass'


const Pricing = () => {
    return (
        <div className='Pricing container'>
            <h1 className="Pricing-title">Pricing</h1>
            <div className="Pricing-content">

                <div className="Pricing-box white-box">
                    <img src="" alt=""/>
                    <p className="Pricing-box-price white-price">Apartment A <span className='black'>$125,000</span></p>
                    <ul className="Pricing-info">
                        <li>245 m<sup>2</sup></li>
                        <li>1 Bathroom</li>
                        <li>2 Bedrooms</li>

                        <li>10 m<sup>2</sup> Balcony</li>
                    </ul>
                    <button className="green">Contact Agent</button>
                </div>

                <div className="Pricing-box green-box">
                    <img src="" alt=""/>
                    <p className='Pricing-box-price green-price'>Apartment B <span className='white'>$125,000</span></p>
                    <ul className="Pricing-info">
                        <li>340 m<sup>2</sup></li>
                        <li>2 Bathrooms</li>
                        <li>2 Bedrooms</li>
                        <li>15 m<sup>2</sup> Balcony</li>
                    </ul>
                    <button className="white">Contact Agent</button>

                </div>

                <div className="Pricing-box white-box">
                    <img src="" alt=""/>
                    <p className='Pricing-box-price white-price'>Apartment C <span className='black'>$125,000</span></p>
                    <ul className="Pricing-info">
                        <li>480 m<sup>2</sup></li>
                        <li>2 Bathrooms</li>
                        <li>2 Bedrooms</li>
                        <li>30 m<sup>2</sup> Terrace</li>
                    </ul>
                    <button className="green">Contact Agent</button>

                </div>
            </div>
        </div>
    )
}

export default Pricing
