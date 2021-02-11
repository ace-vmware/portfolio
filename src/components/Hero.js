import React, { Component } from 'react';

class Hero extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  supportsSmoothScrolling() {
    const body = document.body;
    const scrollSave = body.style.scrollBehavior;
    body.style.scrollBehavior = 'smooth';
    const hasSmooth = getComputedStyle(body).scrollBehavior === 'smooth';
    body.style.scrollBehavior = scrollSave;
    return hasSmooth;
  }
  
  scrollToSection(event) {
    if (this.supportsSmoothScrolling()) {
      return;
    }
    event.preventDefault();
    const scrollToElem = document.getElementById("section");
    this.SmoothVerticalScrolling(scrollToElem, 300, "top");
  }

  SVS_B(eAmt, position) {
    if (position === "center" || position === "")
    window.scrollBy(0, eAmt / 2);
    if (position === "top")
    window.scrollBy(0, eAmt);
  }

  SmoothVerticalScrolling(element, time, position) {
    var eTop = element.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
      window.setTimeout(this.SVS_B, curTime, eAmt, position);
      curTime += time / 100;
    }
  }
  
  
  render() {
    return (
      <div id="hero">
          <nav role="navigation">
            <div id="menuToggle">

              <input type="checkbox" />
              

              <span></span>
              <span></span>
              <span></span>
              

              <ul id="menu">
                <a href="#hero" onClick={this.scrollToSection.bind(this)}><li>Home</li></a>
                <a href="#aboutme-section" onClick={this.scrollToSection.bind(this)}><li>About</li></a>
                <a href="#work-section" onClick={this.scrollToSection.bind(this)}><li>Work</li></a>
                <a href="#contact-section" onClick={this.scrollToSection.bind(this)}><li>Contact</li></a>
                <a href="#footer-section" onClick={this.scrollToSection.bind(this)}><li>Links</li></a>
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