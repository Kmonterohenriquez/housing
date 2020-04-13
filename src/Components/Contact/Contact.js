import React from 'react'
import './Contact.sass'
import agent_pic from '../../img/author-01.jpg'

const Contact = () => {
    return (
        <div className='Contact  '>
            <div className='container'>
                
            <h1 className="Contact-title">Contact</h1>
           <div className='Contact-content'>
                <div className="Contact-left-side">
                    <h3 className="Contact-left-side-title">Our Agent</h3>
                   <div className='separator'>
                        <img src={agent_pic} alt="Agent"/>
                        <div className='person-info'>
                            <p className="name">Valery Duran</p>
                            <p className="phone"><strong>Phone: </strong> (123) 456 789 000</p>
                            <p className="email"><strong>E-mail: </strong> Valery.Duran@example.com</p>
                            <p className="skype"><strong>Skype: </strong> Valery Duran</p>
                        </div>
                   </div>
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
        </div>
    )
}

export default Contact
