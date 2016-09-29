import React, { Component } from 'react';
import './style/App.css';

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
      showGA: !this.state.showGA,
      showNUS: false,
      showNOC: false,
      showUCB: false
    });
  }
  _NUSClick(){
    this.setState({
      showGA: false,
      showNUS: !this.state.showNUS,
      showNOC: false,
      showUCB: false
    });
  }
  _NOCClick(){
    this.setState({
      showGA: false,
      showNUS: false,
      showNOC: !this.state.showNOC,
      showUCB: false
    });
  }
  _UCBClick(){
    this.setState({
      showGA: false,
      showNUS: false,
      showNOC: false,
      showUCB: !this.state.showUCB
    });
  }

  render(){

    let Content;

    if (this.state.showGA) {
      Content = <div id="GAcontent"><h3>GA</h3></div>
    }
    else if (this.state.showNUS) {
      Content = <div id="NUScontent"><h3>NUS</h3></div>
    }
    else if (this.state.showNOC) {
      Content = <div id="NOCcontent"><h3>NOC</h3></div>
    }
    else if (this.state.showUCB) {
      Content = <div id="UCBcontent"><h3>UC Berkeley</h3></div>
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
