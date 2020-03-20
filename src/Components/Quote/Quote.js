import React from 'react'
import './Quote.sass'
import background  from '../../img/gallery-01.jpg'
const Quote = () => {
    return (
        <div className='Quote'>
            <img src={background} alt="house background"/>
            <i className="fas fa-quote-left"></i>
            <h1>Cras nisl lacus, tincidunt vitae neque vitae, interdum iaculis tortor. Orci varius natoque penatibus et magnis dis parturient montes</h1>
            <p>John Doe</p>

        </div>
    )
}

export default Quote
