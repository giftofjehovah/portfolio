import React, { Component } from 'react';
import '../style/App.css';

class Tompang extends Component {
  render(){
    return(
      <div className="showcase-content">
        <h3><a href="https://meeniebeanie.github.io/karakom-/">TOMPANG</a></h3>
        <div className="parentflex">
          <div>
            <div>
              <p>I love buying things from overseas, but shipping is a pain. sometimes the cost of shipping is even more than the item itself. This has been an idea of mine for the longest time, to enable travellers to monetize their extra luggage space by buying things for people. Built on the 6th week of GA's web development immersive bootcamp.</p>
            </div>
            <div className="description parentflex">
              <div>
                <h5>What I like about it:</h5>
                <ul>
                <li>The home page with video background looks pretty cool.</li>
                </ul>
              </div>
              <div>
                <h5>What I would change:</h5>
                <ul>
                <li>UX: should prompt them to see whats available rather than choose from countries.</li>
                <li>More functionalities: upload pictures, chat system</li>
                </ul>
              </div>
            </div>
            <div>
            <h5>Built Using</h5>
            <ul>
            <li>Ruby on Rails / Postgresql</li>
            </ul>
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

export default Tompang;
