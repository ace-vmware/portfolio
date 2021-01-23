import React, { Component } from 'react'

class AboutMe extends Component {
constructor(props) {
    super(props)
    this.state = {
        off: "off-sign",
        closed: "closed-sign",
        open: "open-sign"
    }
    this.handleClick = this.handleClick.bind(this);
}

    handleClick(event) {
        let target = event.target;
        let lessBtn = document.getElementById('less-btn')
        let moreBtn = document.getElementById('more-btn')
        let aboutMe1 = document.getElementById("aboutme-txt1")
        let aboutMe2 = document.getElementById("aboutme-txt2")
        
        if (target === lessBtn) {
            lessBtn.classList.remove('off-sign')
            lessBtn.classList.add('closed-sign')

            moreBtn.classList.remove("open-sign")
            moreBtn.classList.add("off-sign")

            aboutMe1.style.display = "block";
            aboutMe2.style.display = "none";


        }
        else if (target === moreBtn) {
            moreBtn.classList.remove('off-sign')
            moreBtn.classList.add("open-sign")

            lessBtn.classList.remove("closed-sign")
            lessBtn.classList.add("off-sign")

            aboutMe1.style.display = "none";
            aboutMe2.style.display = "block";
        }
    }

render(){

    return(
        <div 
            id="aboutme-section" 
            className="d-flex flex-column justify-content-center align-items-center" 
            onClick={this.handleClick}>
            <div id="slider-container" className="d-flex flex-row justify-content-center">
                <div id="left-box" className="d-flex flex-column">
                    <h3 id="less-btn" className="off-sign text-center p-1" signState={this.state.off}>LESS</h3>
                    <h3 id="more-btn" className="off-sign text-center pb-0 px-3">MORE</h3>
                    {/* <h3 className="off-sign text-center p-1">OFF</h3> */}
                </div>
                <div id="middle-box" className="text-white mx-3">
                    <h3 id="aboutme-txt1" className="text-center p-1">About&nbsp;Me</h3>
                    <h3 id="aboutme-txt2" className="text-center mt-3">About&nbsp;Me</h3>
                </div>
                <div id="right-box" className="text-white text-center">
                    <div>
                        <p>words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default AboutMe