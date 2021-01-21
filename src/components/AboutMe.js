import React, { Component } from 'react'

class AboutMe extends Component {
constructor(props) {
    super(props)
}

render(){
    return(
        <div id="aboutme-section" className="d-flex flex-column justify-content-center align-items-center">
            <div id="slider-container" className="d-flex flex-row justify-content-center align-items-start">
                <div id="left-box" className="d-flex text-white"></div>
                <div id="right-box" className="d-flex text-white"></div>
            </div>
        </div>
    )
}
}

export default AboutMe