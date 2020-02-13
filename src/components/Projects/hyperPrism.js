import React from 'react'
import '../Styles/Projects/hyperprism.css'

export default class MariannasWeb extends React.Component{


    render(){
        return(
            <div className='showcase-container'>
                <h1>Pickem</h1>
                <div className='showcase-hr'> 
                  <hr className='hr'/>
                </div> 
                <div className='row-1'>
                  <div className='showcase-image'>
                    <img alt='pickem website logo' className='pickem-img'></img> 
                  </div>
                  <div className='section-2'>
                    <h2>What is Pickem?</h2>
                    <p>Pick Em is a investor application that makes it easier to research stocks and make 
                       better investment decisions. Our easy to use app provides both beginner and sophisticated
                       investors with an automated system that analyzes key financial indicators. Pickem will 
                       allow the customer to determine whether a buy signal is warranted.</p> 
                    <a href='https://getpickem.co/'>Visit Site</a> 
                  </div> 

                </div> 
                <div className='showcase-hr'> 
                  <hr className='hr'/>
                </div>

                <div className='row-2'>
                  <div className='showcase-image-2'>
                    <img alt='hey' className='pickem-img-2'/>
                  </div>                 
                  <div className='list'>
                    <h2>Built Using</h2>
                      <ul>
                        <li>HTML/CSS</li> 
                        <li>Javascript</li> 
                        <li>React</li> 
                      </ul>
                      <div style={{paddingRight:"20px"}}> 
                        <ul> 
                          <li>Node.js</li> 
                          <li>Stripe</li> 
                          <li>Firebase</li> 
                          <li>Postgres</li>
                          <li>UI</li> 
                        </ul> 
                      </div> 
                     <a style={{width: '100%', textAlign: 'center' }}href='https://github.com/Lambda-School-Labs/labspt2-investor-data-app'>Github Repo</a> 
                     
                    </div> 

                </div>
                <div className='showcase-hr'> 
                  <hr className='hr'/>
                </div>
                <div className='contributions-container'>
                  <h2>Contributions</h2> 
                </div> 
            </div> 
        )
    }
}