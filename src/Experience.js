import React, { Component } from 'react';
import './style/App.css';
import Compstak from './Experience/Compstak.js';
import Oddle from './Experience/Oddle.js';

class Experience extends Component {
  constructor(){
    super();
    this.state = {
      showCS: false,
      showODL: false,
    }
  }

  _setWorkState(work){
    const defaultState = {
      showCS: false,
      showODL: false
    }

    const modifiedState = {
      [work]: true
    }

    const newState = Object.assign({}, defaultState, modifiedState)
    this.setState(newState)
  }

  _CSClick(work){
    this._setWorkState('showCS')
  }

  _ODLClick(work){
    this._setWorkState('showODL')
  }

  render(){

    let Content = <div></div>;

    if (this.state.showCS){
      Content = <Compstak />
    } else if (this.state.showODL) {
      Content = <Oddle />
    }

    return(
      <div className="Experience-panel" id="work">
        {Content}

        <div className="Experience">
          <h1 className="title">Experience</h1>
            <div>
              <div onClick={this._CSClick.bind(this)}>
                <p>CompStak</p>
                <li>Marketing Intern</li>
              </div>

              <div onClick={this._ODLClick.bind(this)}>
                <p>Oddle</p>
                <li>Marketing & Operations Intern</li>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Experience;
