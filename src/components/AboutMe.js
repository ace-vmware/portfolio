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
        let aboutMeContent = document.getElementById('about-me-content')
        
        if (target === lessBtn) {
            lessBtn.classList.remove('off-sign')
            lessBtn.classList.add('closed-sign')

            moreBtn.classList.remove("open-sign")
            moreBtn.classList.add("off-sign")

            aboutMeContent.innerHTML = "Hi. I'm Adam: a creative, problem-solver, and technologist. I'm a self-taught software engineer currently working at VMware as a SaaS Support Engineer. I enjoy bulding websites, automating tasks with scripts, and learning about computer science. Some technologies I enjoy are Javascript, React.js, Node.js, MsSQL, Python, and Django. I like computers and people, and I'm passionate about making sure each other understands each other. Let's work together."


        }
        else if (target === moreBtn) {
            moreBtn.classList.remove('off-sign')
            moreBtn.classList.add("open-sign")

            lessBtn.classList.remove("closed-sign")
            lessBtn.classList.add("off-sign")

            aboutMeContent.innerHTML = "Indoors my time is generally divided between practicing code, playing video games, working, cooking, and spending time with my best friend and wife, Alex. The first three I do all at my \"battlestation\": a home-built PC setup with customized everything. From software I wrote to hardware I installed, there's almost nothing on my desk I haven't tailored to my enjoyment. Beyond clicking and clacking at my desk, I'm an undiscovered semi-pro chef. I love smoking meat and I can make a blueberry pie that would make your own granny swoon with jealousy.</br></br> Outdoors, I take a lot of walks with my two dogs: Gandalf, a pillowy white Great Pyrenees, and Sequoia, a Build-A-Bear-esque miniature Australian Sheppard. I glamp in the North Georgia mountains with my friends in the Fall and in the Winter, blow all my money at bourgeoisie, out-west winter parks running into families with my snowboard. I'm also a sucker for a good conversation and a decent pour of whiskey on any porch I can find."
        }
    }

render(){

    return(
        <div 
            id="aboutme-section" 
            className="d-flex flex-column justify-content-center align-items-center" 
            onClick={this.handleClick}>
            <div id="slider-container" className="d-flex flex-column justify-content-start">
                <div id="top-box" className="d-flex flex-column justify-content-center my-5">
                    <div className="d-flex justify-content-center align-items-baseline">
                        <h3 id="less-btn" className="closed-sign text-center" signState={this.state.off}>LESS</h3>
                        <h3 id="more-btn" className="off-sign text-center mx-3 pr-2">MORE</h3>
                    </div>
                    <h3 id="aboutme-txt1" className="text-center m-3 text-white">About&nbsp;Me</h3>

                </div>
                <div id="bottom-box" className="text-white text-center overflow-auto">
                    <div>
                        <p id='about-me-content'>Hi. I'm Adam: a creative, problem-solver, and technologist. I'm a self-taught software engineer currently working at VMware as a SaaS Support Engineer. I enjoy bulding websites, automating tasks with scripts, and learning about computer science. Some technologies I enjoy are Javascript, React.js, Node.js, MsSQL, Python, and Django. I like computers and people, and I'm passionate about making sure each other understands each other. Let's work together.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default AboutMe