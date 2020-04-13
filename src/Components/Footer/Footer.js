import React from 'react'
import './Footer.sass'
import white_logo from '../../img/white_logo.png'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='logo-container'>
                <img src={white_logo} alt="Oberlo white logo"/>
                <p>Oberlo</p>
            </div>
        </div>
    )
}

export default Footer
