import React, { Component } from 'react';
import '../style/App.css';

class Cheq extends Component {
  render(){
    return(
      <div className="showcase-content">
        <h3><a href="https://meeniebeanie.github.io/karakom-/">CHEQ</a></h3>
        <div className="parentflex">
          <div>
            <div>
              <p>Keep check and split your expenses with friends! A group project, built with Barney and Zhezhang.</p>
            </div>
            <div className="description parentflex">
              <div>
                <h5>What I like about it:</h5>
                <ul>
                <li>The music cover is awesome.</li>
                <li>It is really fun.</li>
                <li>I love the colours and the simple UI.</li>
                </ul>
              </div>
              <div>
                <h5>What I would change:</h5>
                <ul>
                <li>Take into account players hitting backspace</li>
                <li>Take into account errors</li>
                <li>New songs maybe?</li>
                </ul>
              </div>
            </div>
            <div>
            <h5>Built Using</h5>
            <p>Node.JS / Express / React.js / MongoDB / Bootstrap</p>
            </div>
          </div>
          <div>
            <a href="https://meeniebeanie.github.io/karakom-/"><img  src="https://media.giphy.com/media/adwyFv25LoTHG/giphy.gif" width="480" height="342"></img></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Cheq;
