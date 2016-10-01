import React, { Component } from 'react';
import '../style/App.css';

class Karakom extends Component {
  render(){
    return(
      <div>
        <h3>KARAKOM</h3>
        <div className="parentflex">
          <div>
            <div>
              <p><a href="https://meeniebeanie.github.io/karakom-/">Karakom</a> is great</p>
              <p>Created on my second week of General Assembly's Immersive Bootcamp.</p>
            </div>
            <div className="parentflex">
              <div>
                <h5>What I like about it:</h5>
                <ul>
                <li>this</li>
                <li>this</li>
                <li>this</li>
                </ul>
              </div>
              <div>
                <h5>What I would change:</h5>
                <ul>
                <li>this</li>
                <li>this</li>
                <li>this</li>
                </ul>
              </div>
            </div>
            <div>
            <h5>Built Using</h5>
            <ul>
            <li>HTML & CSS</li>
            <li>Javascript</li>
            </ul>
            </div>
          </div>
          <div>
            <iframe src="https://media.giphy.com/media/adwyFv25LoTHG/giphy.gif" width="480" height="342" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Karakom;
