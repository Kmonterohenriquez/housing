import React from 'react'
import './Pricing.sass'

import apartment_a from '../../img/gallery-03.jpg'
import apartment_b from '../../img/gallery-02.jpg'
import apartment_c from '../../img/gallery-05.jpg'


const Pricing = () => {
    return (
        <div className='Pricing container'>
            <h1 className="Pricing-title">Pricing</h1>
            <div className="Pricing-content">

                <div className="Pricing-box white-box">
                    <img src={apartment_a} alt="apartment a"/>
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
                    <img src={apartment_b} alt="apartment b"/>
                    <p className='Pricing-box-price green-price'>Apartment B <span className='white'>$148,000</span></p>
                    <ul className="Pricing-info">
                        <li>340 m<sup>2</sup></li>
                        <li>2 Bathrooms</li>
                        <li>2 Bedrooms</li>
                        <li>15 m<sup>2</sup> Balcony</li>
                    </ul>
                    <button className="white">Contact Agent</button>

                </div>

                <div className="Pricing-box white-box">
                    <img src={apartment_c} alt="apartment c"/>
                    <p className='Pricing-box-price white-price'>Apartment C <span className='black'>$225,000</span></p>
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
