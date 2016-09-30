import React, { Component } from 'react';
import './style/App.css';
import Cheq from './Showcase/Cheq.js';
import Karakom from './Showcase/Karakom.js';
import Milieu from './Showcase/Milieu.js';
import Tompang from './Showcase/Tompang.js';
import FeatureButton from './Components/FeatureButton.js';

class Showcase extends Component {
  constructor(){
    super();
    this.state = {
      _showContent: "karakom"
    }
  }

  _triggerChange(title) {
    this.setState({
      _showContent: title
    })
  }

  render(){
    switch(this.state._showContent) {
      case "Cheq":
        this.state.content = <Cheq />
        break;
      case "Milieu":
        this.state.content = <Milieu />
        break;
      case "Tompang":
        this.state.content = <Tompang />
        break;
      default:
        this.state.content = <Karakom />
        break;
    }

    return (
      <div className="Showcase-panel">
        <h1 className="title">Portfolio</h1>
        <div>
          <FeatureButton title="Karakom" cb={this._triggerChange.bind(this)} />
          <FeatureButton title="Cheq" cb={this._triggerChange.bind(this)} />
          <FeatureButton title="Milieu" cb={this._triggerChange.bind(this)} />
          <FeatureButton title="Tompang" cb={this._triggerChange.bind(this)} />
        </div>
        <div>
          {this.state.content}
        </div>
      </div>
    )
  }
}

export default Showcase;
