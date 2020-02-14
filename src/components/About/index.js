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
                  A large part of my life has been dedicated to capturing sudden sparks of creativity
                  and transforming these mental constructs into tangible products. Sometimes, this may consist of turning a song idea into a recorded piece of media.
                  Other times, this may take the form of an innovative website concept that must be coded into fruition. It's these simple acts of creativity that drive
                  my inner ambition and keep my will in a perpetual quest to penetrate new thresholds of originality.
                  <br/>
                  <br/>
                  One may wonder how I went from being a musician to a developer? While there were many preceding steps, things really found their stride
                  in June of 2018. This was the month that I began class at Lambda School and embarked my web development journey. 
                  <br/>
                  <br/> 
                  Lambda is a 9+ month computer science and software engineering program that provides an immersive hands-on curriculum with a focus on computer science, and fullstack web development.
                  <br/> 
                  <br/> 
                  I entered the program with a minimal amount of coding knowledge but evolved into a full stack developer by the end of the cirriculum. I still find myself absolutely stunned when I reflect on all of the things i've learned and utilized in a short amount of time.
                  I had the pleasure of working on an array of exciting projects with a plethora of talented teams. I even had the opportunity to fulfill roles in leadership positions, which have facilitated a wealth of personal growth. 
                  I'll forever be grateful for this experience, as it has turned my life around and benifited me in every possible way.
                  <br/>
                  <br/> 
                  Enjoy navigating through my portfolio and don't forget to visit my projects section, which is populated with some of my favorite efforts.
                  Also, feel free to contact me with any questions, comments, or just to say "hello". You'll find all of that information and more in my Contact section. 
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