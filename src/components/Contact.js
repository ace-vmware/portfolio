import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class Contact extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      name: "",
      email: "",
      feedback: "",
    };
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ 
       [name]: value 
      });
 }

 sendMessage(event) {
  event.preventDefault();
  // if (!this.validateMail()) {
  //     return;
  // }

  const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: "aevancho@me.com",
      feedback: this.state.feedback
  };

  emailjs
      .send("aevanchoemail", "template_pp1y48m", templateParams, "user_evjQYBc4LC0082kcXtDwi")
      .then((res) => {
          alert("Your message has successfully sent.");
          console.log(res);
      })
      .catch((err) => {
          alert("Your message did not send successfully. Please try again.");
          console.log(err);
      })

      this.setState({
          name: "",
          email: "",
          feedback: ""
          });
}
  
  render() {
    return (
      <div id="contact-section">
        <form 
          className="pt-5"
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
          >
            <h1 className="title text-center mb-5">Let's talk turkey.</h1>

                <div className="form-group position-relative">
                    <label htmlFor="formName" className="d-block">
                        <i id="userIcon" className="far fa-user"></i>
                    </label>
                    <input 
                      type="text"
                      name="name" 
                      id="formName" 
                      className="form-control form-control-lg" 
                      placeholder="Name"
                      onChange={this.handleInputChange.bind(this)}
                      value={this.state.name}
                      required
                      >
                    </input>
                </div>

                <div className="form-group position-relative">
                    <label htmlFor="formEmail" className="d-block">
                        <i id="mailIcon" className="fas fa-at"></i>
                    </label>
                    <input 
                      type="email"
                      name="email" 
                      id="formEmail" 
                      className="form-control form-control-lg" 
                      placeholder="E-mail"
                      onChange={this.handleInputChange.bind(this)}
                      value={this.state.email}
                    >
                    </input>
                </div>

                <div className="form-group message position-relative">
                <i id="messageIcon2" className="far fa-comment"></i>
                    <textarea 
                      id="formMessage" 
                      name="feedback"
                      className="form-control form-control-lg" 
                      rows="7" 
                      placeholder="Message"
                      onChange={this.handleInputChange.bind(this)}
                      value={this.state.feedback}
                    ></textarea>
                </div>
            
                <div className="text-center">
                    <button 
                    type="submit" 
                    className="btn btn-primary" 
                    tabIndex="-1"
                    onClick={this.sendMessage.bind(this)}
                    >Send message</button>
                </div>
            </form>
      </div>
    );
    
  }
  
}

export default Contact;