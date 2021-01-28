import { Carousel } from 'bootstrap';
import React, { Component } from 'react';
import Slider from "./Slider"

class Work extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    var items = [1, 2, 3, 4, 5, 6]
    return (
      <div id="work-section" className="">
        <Slider items={items} active={0}/>
      </div>
    );
    
  }
  
}

export default Work;