import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-transition-group/esm/TransitionGroup';

// Media
import dashboard from "../media/dashboard.png"
import browser from "../media/browser.png"
import capitol from "../media/capitol.png"
import swap from "../media/swap.png"
import webdesign from "../media/webdesign.png"

class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: ''
    }
    this.rightClick = this.moveRight.bind(this)
    this.leftClick = this.moveLeft.bind(this)
  }

  itemContent = [
  {
  name: "Salesforce Dashboard Clone",
  github: "https://github.com/ace-vmware/GSL",
  icon: dashboard,
  tags: ["Node.js", "Express.js"]
},
  {
  name: "Fedbot",
  github: "https://github.com/ace-vmware/Fedbot",
  icon: capitol,
  tags: ["Python", "PostgreSQL"]
},    {
  name: "Squad Reassignment Tool",
  github: "https://github.com/ace-vmware/AutoSquadReassignment",
  icon: swap,
  tags: ["Python", "Flask"]
},    {
  name: "Portfolio",
  github: "https://github.com/ace-vmware/portfolio",
  icon: webdesign,
  tags: ["React.js", "SaaS"]
},    {
  name: "Portfolio (old)",
  github: "https://github.com/ace-vmware/adamevancho-website",
  icon: webdesign,
  tags: ["Python", "Django", "Bootstrap"]
},    {
  name: "Responsive Page",
  github: "https://github.com/ace-vmware/Responsive-Pages",
  icon: browser,
  tags: ["HTML5", "CSS3"]
},    {
  name: "Salesforce Ticket Content Downloader",
  github: "https://github.com/ace-vmware/SFDC-Content-Downloader",
  icon: browser,
  tags: ["Python"]
}
  ]

  generateItems() {
    var items = []
    var level
    console.log(this.state.active)
    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
        var index = i
        if (i < 0) {
            index = this.state.items.length + i
        } else if (i >= this.state.items.length) {
            index = i % this.state.items.length
        }
        level = this.state.active - i
        items.push(<Item 
        key={index} 
        id={this.state.items[index]} 
        level={level} 
        name={this.itemContent[index].name}
        github={this.itemContent[index].github}
        icon={this.itemContent[index].icon}
        tags={this.itemContent[index].tags} 
        />)
    }
    return items
}

  moveLeft() {
    var newActive = this.state.active
    newActive--
    this.setState({
        active: newActive < 0 ? this.state.items.length - 1 : newActive,
        direction: 'left'
    })
  }

  moveRight() {
    var newActive = this.state.active
    this.setState({
        active: (newActive + 1) % this.state.items.length,
        direction: 'right'
    })
  }
  
  render() {
    return(
      <div id="carousel" className="noselect d-flex flex-column">
            <h3 className="work-section-header text-center mt-3 text-dark">Work</h3>
          <div className="d-flex flex-row">
            <div className="arrow arrow-left" onClick={this.leftClick}><i className="fas fa-arrow-left"></i></div>
            <ReactCSSTransitionGroup
            transitionName={this.state.direction}>
              {this.generateItems()}
            </ReactCSSTransitionGroup>
           <div className="arrow arrow-right" onClick={this.rightClick}><i className="fas fa-arrow-right"></i></div>
          </div>
      </div>
      )    
     }  
}

class Item extends React.Component {
    
  constructor(props) {
      super(props)
      this.state = {
          level: this.props.level
      }
  }
  
  render() {
      // const className = 'item overflow-auto level' + this.props.level
      const showScroll = this.props.level !== 0 ? "overflow-hidden" : "overflow-auto"
      const className = 'd-flex flex-column justify-content-evenly text-center ' + 'level' + this.props.level + " item " + showScroll
      
      const tags = []
      for (var tag of this.props.tags) {
        tags.push(<div>{tag}</div>)
      }
      
      return(
          <div className={className}
              style={{
                  // backgroundImage: "url(http://lorempixel.com/400/200/)",
                  // backgroundSize: "cover",
                  // backgroundRepeat: "no-repeat",
                  // backgroundPosition: "center center",
              }}
              >
              {/* <img src={this.props.icon}></img> */}
              <h3>{this.props.name}</h3>
              <img src={this.props.icon} alt="salesforce clone"></img>
              <div className="d-flex">
                {tags}
              </div>
              <a href={this.props.github}><i class="fab fa-github"></i></a>
          </div>
      )
  }
}

var items = [1, 2, 3]
ReactDOM.render(<Slider items={items} active={0}/>, document.getElementById('root'))

export default Slider;