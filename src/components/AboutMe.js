import React, { Component } from 'react'

class AboutMe extends Component {
constructor(props) {
    super(props)
}

render(){
    return(
        <div>
            <button>More About Me</button>
            <p>words words words</p>
            <button>Less About Me</button>
            <p>words words words</p>
        </div>
    )
}
}

export default AboutMe