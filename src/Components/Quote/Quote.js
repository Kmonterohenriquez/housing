import React from 'react'
import './Quote.sass'
import background  from '../../img/gallery-01.jpg'
const Quote = () => {
    return (
        <div className='Quote'>
            <img src={background} alt="house background"/>
            <i className="fas fa-quote-left"></i>
            <h1>You have no idea what's going to happen tomorrow. Why not live with extreme beauty today? </h1>
            <p>Jill Sharp Weeks</p>

        </div>
    )
}

export default Quote
