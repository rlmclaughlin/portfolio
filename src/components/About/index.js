import React from 'react'
import '../Styles/About/about.css'

export default class About extends React.Component{


    render(){
        return(
            <div className='about-container'>
              <div className='about-content'> 
                <h1>About Me</h1> 
                <span className='content-mobile'> 
                  <p> Name: Ryan McLaughlin <br/>
                      Age: 32 <br /> 
                      Occupation: Web Developer </p> 
                </span>  
              </div> 
              <div className='about-me-image'></div>
              <div className='horizontal-rule'> 
                <hr />
              </div>
              <div className="about-main-content"> 
                <p>Greetings!
                  <br/> 
                  <br/>
                  My name is Ryan McLaughlin and I'm a musician-turned-web-developer from Dallas, Texas.
                  <br/>
                  <br/>
                  A large part of my life has been dedicated to capturing the sudden sparks of creativity within the human mind, 
                  and transforming these mental constructs into tangible products. Sometimes, this may consist of turning a song idea into a recorded piece of media.
                  Other times, this may take the form of an innovative website concept that must be coded into fruition. It's these simple acts of creativity that drive
                  my inner ambition and keep my will in a perpetual quest to penetrate new thresholds, in the realm of originality.
                  <br/>
                  <br/>
                  One may wonder how I went from being a musician to a developer? While there were many preceding steps, things really began
                  in June of 2018. This was the day that I began class at Lambda School. Lambda is a 9+ month computer science and software engineering program that provides an immersive hands-on curriculum with a focus on computer science, and fullstack web development.
                  I entered the program with a minimal amount of coding knowledge but exited as a full stack web developer. I still find myself absolutely stunned when I reflect on all of the things i've learned and utilized. I'll forever be grateful
                  for this experience, as it has turned my life around and benifited me in every possible way.
                  <br/> 
                  <br/> 
                  In a short amount of time, I've had the pleasure of working on an array of exciting projects, a multitude of talented teams, and fulfilled leadership positions that facilitated a wealth of personal growth. This journey has
                  certainly manifested challenges, however, each one has been necessary in sculpting me into the developer that I am today. Through these hurdles, I've come to embrace the unknown and view it as an opportunity for discovery and growth.   
                  <br/>
                  <br/>
                  A steady thread in all of my objectives has been an effort to deconstruct patterns of dualistic thinking and illuminate the infinite nuance of the human mind. I love working on projects
                  that will help humanity by providing tools for education and information propagation. The more informed we are, as individuals, the better decisions we'll make, which will lead to positive future.  
                  My recent project, Mariannas Web, is an effort to encapsulate this philosophy by forcing users to escape their echo chambers and receive news from a vast sea of sources. There's even feeds that are completely driven by the users!
                  Through this exercise, I think we'll find that we have much more in common than we previously thought. I invite you to come visit Mariannas Web and we'll discover the truth together!
                  <br/>
                  <br/> 
                  As you navigate through my personal portfolio, please don't hesitate to contact me with any questions or concerns. I'm always thrilled to receive new mail! Also, please feel obliged to add me on LinkedIn or any of the other platforms listed in my contact info. 
                  I sincerely appreciate you taking the time to read my personal background and wish you a stellar 2020!
                  <br/>
                  <br/>
                  Best regards,
                  <br/>
                  <br/>
                  Ryan
        
                
                   

                  
                </p>
              </div> 
            </div> 
        )
    }
}