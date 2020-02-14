import React from 'react'
import '../Styles/Nav/nav.css'

export default class Navigation extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            open: false
        }
    }

    clickHandler = (event) => {
        event.preventDefault(); 
        if(this.state.open === false){
            this.setState({
                open: true
            })
        }
    }

    render(){
        return(
            <div>
                <nav> 
                    <div className='mobile-nav-header'> 
                      <div className='hamburger-container' onClick={this.props.updateHandler} name='open'> 
                        <div className="bar bar1"></div> 
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div> 
                     </div>  
                      <h2>Ryan McLaughlin</h2>                     
                        <i className="far fa-envelope mobile-envelope"></i>
                    </div> 
                    <div>
                      <a href='https://www.linkedin.com/in/ryan-l-mclaughlin'>
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href='https://www.facebook.com/ryan.mclaughlin.9887'>
                        <i className="fab fa-facebook"></i>
                      </a>                      
                        <i className="far fa-envelope desktop-envelope"></i>                     
                      <a href='https://github.com/rlmclaughlin'>
                        <i className="fab fa-github"></i>
                      </a>
                    </div> 
                </nav> 
            </div> 
        )
    }
}


