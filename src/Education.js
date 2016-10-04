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

  _setEdState(ed) {
    const defaultState = {
      showGA: false,
      showNUS: false,
      showNOC: false,
      showUCB: false
    }
    const modifiedState = {
      [ed]: true
    }
    const newState = Object.assign({}, defaultState, modifiedState)
    this.setState(newState)
  }

  _getClassName(ed){
    if (this.state[ed]) return 'bordered'
    return ""
  }

  _GAClick(){
    this._setEdState('showGA')
  }
  _NUSClick(){
    this._setEdState('showNUS')
  }
  _NOCClick(){
    this._setEdState('showNOC')
  }
  _UCBClick(){
    this._setEdState('showUCB')
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
            <div className={this._getClassName('showGA')} onClick={this._GAClick.bind(this)}>
              <p>General Assembly</p>
              <li>Web Development Immersive</li>
            </div>
            <div className={this._getClassName('showNUS')}
            onClick={this._NUSClick.bind(this)}>
              <p>National University of Singapore</p>
              <li>Bachelors of Social Sciences, Sociology</li>
            </div>
            <div className={this._getClassName('showNOC')}
            onClick={this._NOCClick.bind(this)}>
              <p>NUS Overseas Colleges, New York</p>
              <li>Technopreneurship Minor</li>
            </div>
            <div className={this._getClassName('showUCB')} onClick={this._UCBClick.bind(this)}>
              <p>University of California, Berkeley</p>
              <li>Summer Exchange Program</li>
            </div>
          </ul>
        </div>
        <div className="edu-info">
          {Content}
        </div>
      </div>
    )
  }
}

export default Education;
