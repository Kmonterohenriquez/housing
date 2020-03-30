import React from 'react'
import './Partners.sass'

import partner_1 from '../../img/partner-1.png'
import partner_2 from '../../img/partner-2.png'
import partner_3 from '../../img/partner-3.png'
import partner_4 from '../../img/partner-4.png'
import partner_5 from '../../img/partner-5.png'

const Partners = () => {
    return (
        <div className='Partners'>
            <h1 className="Partners-title">Partners</h1>
            <div className="Partners-list container">
                <img src={partner_1} alt="Partner logo"/>
                <img src={partner_2} alt="Partner logo"/>
                <img src={partner_3} alt="Partner logo"/>
                <img src={partner_4} alt="Partner logo"/>
                <img src={partner_5} alt="Partner logo"/>
                
            </div>
        </div>
    )
}

export default Partners
