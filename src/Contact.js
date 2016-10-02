import React, { Component } from 'react';
import './style/App.css';

class Contact extends Component {
  constructor(){
    super();
    this.state = {
      showContact: false,
    }
  }

  _contactClick(){
    this.setState({
      showContact: !this.state.showContact
    });
  }

  render(){

    let contactLinks;
    let triangle;

    if (this.state.showContact) {
      triangle =
      <div className="triangle">
      </div>;

      contactLinks =
        <div className="Contact-info">
        <div>
          <a href="#about">About</a>
        </div>

        <hr className="contact-hr"/>

        <div>
          <a href="#education">Education</a><br/>
        </div>

        <hr className="contact-hr"/>

        <div>
          <a href="#work">Work</a><br/>
        </div>

        <hr className="contact-hr"/>

        <div>
          <a href="#contact">Let's Talk</a><br/>
        </div>
        </div>;
    }

    return(
      <div>
        <div onClick={this._contactClick.bind(this)} className="Contact-bubble">
        </div>
        {contactLinks}
        {triangle}
      </div>
    )
  }
}

export default Contact;
