import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-transition-group/esm/TransitionGroup';

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

  staticList = ["static1", "static2", "static3", "static4", "static5", "static6"]

  itemContent = [
  {
  name: "GSL",
  github: "https://github.com/ace-vmware/GSL",
  icon: "//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/red-apple.png",
  description: "This is a sample description."
},
  {
  name: "GSL",
  github: "https://github.com/ace-vmware/GSL",
  icon: "//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/red-apple.png",
  description: "This is a sample description."
},    {
  name: "GSL",
  github: "https://github.com/ace-vmware/GSL",
  icon: "//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/red-apple.png",
  description: "This is a sample description."
},    {
  name: "GSL",
  github: "https://github.com/ace-vmware/GSL",
  icon: "//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/red-apple.png",
  description: "This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. "
},    {
  name: "GSL",
  github: "https://github.com/ace-vmware/GSL",
  icon: "//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/red-apple.png",
  description: "This is a sample description."
},    {
  name: "GSL",
  github: "https://github.com/ace-vmware/GSL",
  icon: "//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/red-apple.png",
  description: "This is a sample description."
},    {
  name: "GSL",
  github: "https://github.com/ace-vmware/GSL",
  icon: "//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/red-apple.png",
  description: "This is a sample description."
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
        description={this.itemContent[index].description} 
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
              {/* <Item className="item overflow-auto level-2"/>
              <Item className="item overflow-auto level-1"/>
              <Item className="item overflow-auto level0"/>
              <Item className="item overflow-auto level1"/>
              <Item className="item overflow-auto level2"/> */}
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
      const className = 'level' + this.props.level + " item " + showScroll
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
              <h1>{this.props.name}</h1>
              <p>{this.props.description}</p>
              <p>{this.props.github}</p>
          </div>
      )
  }
}

var items = [1, 2, 3]
ReactDOM.render(<Slider items={items} active={0}/>, document.getElementById('root'))

export default Slider;