import React, { Component } from 'react';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div id="contact-section">
        <form className="pt-5">
            <h1 className="title text-center mb-5">Let's talk turkey.</h1>

                <div className="form-group position-relative">
                    <label htmlFor="formName" className="d-block">
                        <i id="userIcon" className="far fa-user"></i>
                    </label>
                    <input type="text" id="formName" className="form-control form-control-lg" placeholder="Name"></input>
                </div>

                <div className="form-group position-relative">
                    <label htmlFor="formEmail" className="d-block">
                        <i id="mailIcon" className="fas fa-at"></i>
                    </label>
                    <input type="email" id="formEmail" className="form-control form-control-lg" placeholder="E-mail"></input>
                </div>

                <div className="form-group message position-relative">
                <i id="messageIcon2" className="far fa-comment"></i>
                    <textarea id="formMessage" className="form-control form-control-lg" rows="7" placeholder="Message"></textarea>
                </div>
            
                <div className="text-center">
                    <button type="submit" className="btn btn-primary" tabIndex="-1">Send message</button>
                </div>
            </form>

      </div>
    );
    
  }
  
}

export default Contact;