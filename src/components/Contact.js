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
            <h1 className="title text-center mb-5">Let's Talk Turkey.</h1>

                <div className="form-group position-relative">
                    <label htmlFor="formName" className="d-block">
                        <i className="icon" data-feather="user"></i>
                    </label>
                    <input type="text" id="formName" className="form-control form-control-lg" placeholder="Name"></input>
                </div>

                <div className="form-group position-relative">
                    <label htmlFor="formEmail" className="d-block">
                        <i className="icon" data-feather="mail"></i>
                    </label>
                    <input type="email" id="formEmail" className="form-control form-control-lg" placeholder="E-mail"></input>
                </div>

                <div className="form-group message">
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