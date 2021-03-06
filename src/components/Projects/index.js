import React from 'react'
import '../Styles/Projects/Projects.css'
import {Link} from 'react-router-dom'

const pickemImg = require('./pickem-home.jpg')
const image = require('./mw-image2.PNG')

export default class Projects extends React.Component{

    render(){
        return(
            <div className='project-container'> 
             <h1>Projects</h1> 
             <hr className='project-horizontal-rule'/> 

              <div className='project'>
                <h1>Pickem</h1>  
                <div className='project-image'>
                  <img src={pickemImg} className='project-img'/>
                </div>
                <p>A site for investors of all levels</p>
                <Link to='pickem' style={{color:'#0000EE'}}>Learn More</Link>
              </div>  
              <div className='project'>
                <h1>Mariannas Web</h1>  
                <div className='project-image'>
                  <img alt='hyper prism site' src={image} className='project-img2'/>
                </div>
                <p>News for the 21st century</p>
                <Link to='/mariannasWeb' style={{color:'#0000EE'}}>Learn More</Link>
              </div>   
            </div> 
        )
    }
}