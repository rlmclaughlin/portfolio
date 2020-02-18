import React from 'react'
import '../Styles/Skills/skills.css'

export default class Skills extends React.Component{

    render(){

        return(
            <div className='skills-container'>
              <div className='skills-content'> 
                <h1>Skills</h1>   
              </div>  
              <div className='horizontal-rule-skills'> 
                <hr />
              </div> 
              <h2 style={{width:'100%', textAlign: 'center'}}>Front End</h2>
              <div className='skills-main-content'>
                <div className='skill-bubble'><span>HTML/CSS</span></div> 
                <div className='skill-bubble'>LESS</div>  
                <div className='skill-bubble'>JavaScript</div>   
                <div className='skill-bubble'>React.js</div>
                <div className='skill-bubble'>Redux.js</div> 
                <div className='skill-bubble'>Axios</div> 
                <div className='skill-bubble'>React-Router</div> 
                <div className='skill-bubble'>Formik</div> 
                <div className='skill-bubble'>ReactStrap</div> 
                <div className='skill-bubble'>Context-UI</div> 
              </div>
              <h2 style={{width:'100%', textAlign: 'center'}}>Backend</h2>
              <div className='skills-main-content'>
                <div className='skill-bubble'>Node.JS</div> 
                <div className='skill-bubble'>Python</div> 
                <div className='skill-bubble'>Express.js</div> 
                <div className='skill-bubble'>Knex.js</div> 
                <div className='skill-bubble'>SQLite</div> 
                <div className='skill-bubble'>Bcrypt.js</div> 
                <div className='skill-bubble'>Puppeteer</div> 
                <div className='skill-bubble'>JWT</div> 
              </div>
              <h2 style={{width:'100%', textAlign: 'center'}}>Other</h2>
              <div className='skills-main-content'>
                <div className='skill-bubble'>GitHub</div> 
                <div className='skill-bubble'>Facebook API</div> 
                <div className='skill-bubble'>Heroku</div> 
                <div className='skill-bubble'>Postman</div> 
                <div className='skill-bubble'>Netlify</div> 
                <div className='skill-bubble'>Jest</div> 
                <div className='skill-bubble'>GitBash</div>
              </div>
          </div>
        )
    }
}
