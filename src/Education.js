import React, { Component } from 'react';
import './style/App.css';
import GA from './Education/GA';
import NOC from './Education/NOC';
import NUS from './Education/NUS';
import UCB from './Education/UCB';



class Education extends Component {
  constructor(){
    super();
    this.state = {
      showGA: false,
      showNUS: false,
      showNOC: false,
      showUCB: false
    }
  }

  _GAClick(){
    this.setState({
      showGA: true,
      showNUS: false,
      showNOC: false,
      showUCB: false
    });
  }
  _NUSClick(){
    this.setState({
      showGA: false,
      showNUS: true,
      showNOC: false,
      showUCB: false
    });
  }
  _NOCClick(){
    this.setState({
      showGA: false,
      showNUS: false,
      showNOC: true,
      showUCB: false
    });
  }
  _UCBClick(){
    this.setState({
      showGA: false,
      showNUS: false,
      showNOC: false,
      showUCB: true
    });
  }

  render(){

    let Content;

    if (this.state.showGA) {
      Content = <GA />
    }
    else if (this.state.showNUS) {
      Content = <NUS />
    }
    else if (this.state.showNOC) {
      Content = <NOC />
    }
    else if (this.state.showUCB) {
      Content = <UCB />
    }





    return(
      <div className="Education-panel" id="education">
        <div>
          <h1>Education</h1>
          <ul>
            <div onClick={this._GAClick.bind(this)}>
              <p>General Assembly</p>
              <li>Web Development Immersive</li>
            </div>
            <div onClick={this._NUSClick.bind(this)}>
              <p>National University of Singapore</p>
              <li>Bachelors of Social Sciences, Sociology</li>
            </div>
            <div onClick={this._NOCClick.bind(this)}>
              <p>NUS Overseas Colleges, New York</p>
              <li>Technopreneurship Minor</li>
            </div>
            <div onClick={this._UCBClick.bind(this)}>
              <p>University of California, Berkeley</p>
              <li>Summer Exchange Program</li>
            </div>
          </ul>
        </div>
          {Content}
      </div>
    )
  }
}

export default Education;
