import React from 'react'
import '../Styles/Contact/contact.css'

const contactImage = require('./contact-image.jpg')

export default class Contact extends React.Component{

    render(){
        return(
            <div className='contact-container'>
                <h1 className='mobile-header'>Contact Me</h1>   
                <div className='image'> 
                  <img alt="sun-glare" src={contactImage}/>
                </div> 
                <hr/> 
                <div className='contact'>
                  <h1>Contact Me</h1> 
                  <p>Facebook: <a style={{color:'#0000EE'}} href='https://www.facebook.com/ryan.mclaughlin.9887'>Visit Here</a></p>
                  <p>LinkedIn: <a style={{color:'#0000EE'}} href='https://www.linkedin.com/in/ryan-l-mclaughlin'>Visit Here</a></p> 
                  <p>Phone: 972-974-8268</p>
                  <p>Email: rlmclaughlin@yahoo.com</p>
                </div>  
                     
            </div> 
        )
    }
}