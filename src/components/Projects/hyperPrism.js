import React from 'react'
import '../Styles/Projects/hyperprism.css'

export default class MariannasWeb extends React.Component{


    render(){
        return(
            <div className='showcase-container'>
                <h1>Mariannas Web</h1>
                <div className='showcase-hr'> 
                  <hr className='hr'/>
                </div> 
                <div className='row-1'>
                  <div className='showcase-image'>
                    <img alt='pickem website logo' className='pickem-img'></img> 
                  </div>
                  <div className='section-2'>
                    <h2>What is Mariannas Web?</h2>
                    <p>Mariannas Web is a news aggregation feed that provides articles from a variety of sources
                       as well sections that are populated entirely by its users. The site includes a personal dashboard for 
                       members that provides access to a private feed, a customizable feed, and the ability to post articles. 
                       Come join the experiment designed to break you out of your echo chamber and discover fresh perspectives. 
                       
                     </p> 
                    <a href='https://www.mariannasweb.com/'>Visit Site</a> 
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
                          <li>Axios</li> 
                          <li>Postgres</li>
                          <li>Bcrypt.js</li> 
                        </ul> 
                      </div> 
                     <a style={{width: '100%', textAlign: 'center' }}href='https://github.com/mariannas-web'>Github Repo</a> 
                     
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