import React, { Component } from 'react';
import './style/App.css';

class Education extends Component {
  render(){
    return(
      <div className="Education-panel" id="education">
        <div>
          <h1>Education</h1>
          <ul>
            <div>
              <p>General Assembly</p>
              <li>Web Development Immersive</li>
            </div>
            <div>
              <p>National University of Singapore</p>
              <li>Bachelors of Social Sciences, Sociology</li>
            </div>
            <div>
              <p>NUS Overseas Colleges, New York</p>
              <li>Technopreneurship Minor</li>
            </div>
            <div>
              <p>University of California, Berkeley</p>
              <li>Summer Exchange Program</li>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default Education;
