import React, { Component } from 'react';
import './style/App.css';

class About extends Component {
  render(){
    return(
      <div className="About-panel" id="about">
        <h1 className="title">About me</h1>
        <hr/>
        <p>I believe that technology makes the world a better place. Constantly excited by creative ideas, I love collaborating with passionate people to deliver results. Let’s have a chat about changing the world, together.</p>
      </div>
    )
  }
}

export default About;
