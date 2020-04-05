import React from 'react'
import './Showcase.sass'
import slide_01 from '../../img/slide-01.jpg'
const Showcase = () => {
    return (
        <div className='Showcase'>
            <div className='img-container'>
                <img src={slide_01} alt="house apartment"/>
            </div>
            <div className="Showcase-box">
                <h1 className="title">Jarabacoa Residence</h1>
                <form action="">
                    <label htmlFor="">Subscribe for latest news!</label>
                    <div className='input-container'>
                        <input type="text" placeholder='Your Email'/>
                        <i className="fas fa-angle-right"></i>
                    </div>
                    
                </form>
                <hr/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime odit atque architecto in nostrum ut aperiam cumque.</p>

                <button>More</button>
            </div>

        </div>
    )
}

export default Showcase
