import React, { Component } from 'react';

class Hero extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div id="hero">
          <div className="d-flex justify-content-center align-items-center flex-column hero">
                <h1 className="herotext mx-5">Adam Evancho</h1>
                <br></br>
                <div className="d-inline-flex align-items-baseline">
                  <h2 className="text-warning herotext3">{"{ "}</h2>
                  <h2 className="text-primary d-flex herotext3">web developer</h2>
                  <h2 className="text-warning herotext3">{" }"}</h2>
                  <h2 className="indigo200 herotext2">&nbsp;extraordinaire</h2>
                </div>
                <div className="d-inline-flex align-items-baseline mt-n3">
                  <h2 className="d-flex indigo200 herotext2">problem-solver&nbsp;</h2>
                  <h2><i className="text-danger herotext4">supreme</i></h2>
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