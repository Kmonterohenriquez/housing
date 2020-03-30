import React from 'react'
import './Contact.sass'

const Contact = () => {
    return (
        <div className='Contact container '>
            <h1 className="Contact-title">Contact</h1>
           <div className='Contact-content'>
                <div className="Contact-left-side">
                    <h3 className="Contact-left-side-title">Our Agent</h3>
                    <img src="" alt=""/>
                    <p className="name">Glennys Collado</p>
                    <h4>Our Agent</h4>
                    <p className="phone"><strong>Phone: </strong> (123) 456 789 000</p>
                    <p className="email"><strong>E-mail: </strong> Glennys.Collado@example.com</p>
                    <p className="skype"><strong>Skype: </strong> Glennys Collado</p>
                </div>
                <div className="Contact-right-side">
                    <h1 className="Contact-right-side-title">Contact Form</h1>
                    <form>
                        <div className='input-container'>
                            <div className="input-box">
                                <label htmlFor="">Your Name</label>
                                <input type="text" placeholder='Your Name'/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="">Your Email</label>
                                <input type="text" placeholder='Your Email'/>
                            </div>
                        </div>
                        <div className='textarea-container'>
                            <label>Your Message</label>
                            <textarea>Your Message</textarea>
                        </div>
                    </form>
                    <button>Send a Message</button>
                </div>
           </div>
        </div>
    )
}

export default Contact
