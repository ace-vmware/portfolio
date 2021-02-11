import React, { Component } from 'react';

class Hero extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id="hero">
          <nav id="nav" role="navigation">
            <div id="menuToggle">

              <input type="checkbox" />
              

              <span></span>
              <span></span>
              <span></span>
              

              <ul id="menu">
                <a href="#hero"><li>Home</li></a>
                <a href="#aboutme-section"><li>About</li></a><li>About</li>
                <a data-scroll href="#work-section"><li>Work</li></a>
                <a href="#contact-section"><li>Contact</li></a>
                <a href="#footer-section"><li>Links</li></a>
              </ul>
            </div>
          </nav>
          <div className="d-flex justify-content-center align-items-center flex-column hero">
                <h1 className="herotext mx-5">Adam Evancho</h1>
                <br></br>
                <div className="d-inline-flex align-items-baseline">
                  <h2 className="text-warning herotext3">{"{ "}</h2>
                  <h2 className=" d-flex herotext3">web developer</h2>
                  <h2 className="text-warning herotext3">{" }"}</h2>
                  <h2 className="herotext2">&nbsp;extraordinaire</h2>
                </div>
                <div className="d-inline-flex align-items-baseline mt-n3">
                  <h2 className="d-flex herotext2">problem-solver&nbsp;</h2>
                  <h2><i className="herotext4">supreme</i></h2>
                </div>
          </div>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
      </div>
    );
    
  }
  
}

export default Hero;