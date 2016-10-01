import React, { Component } from 'react';
import './style/App.css';
import Cheq from './Showcase/Cheq.js';
import Karakom from './Showcase/Karakom.js';
import Milieu from './Showcase/Milieu.js';
import Tompang from './Showcase/Tompang.js';

class Showcase extends Component {
  constructor(){
    super();
    this.state = {
      p1: false,
      p2: false,
      p3: false,
      p4: false
    }
  }

  _setExpState(exp){
    const defaultState = {
      p1: false,
      p2: false,
      p3: false,
      p4: false
    }
    const whenClicked = {
      [exp]: true
    }
    const newState = Object.assign({}, defaultState, whenClicked)
    this.setState(newState)
  }

  _getClassName(exp){
    if (this.state[exp]) return 'borderbottom'
    return ''
  }

  _P1click(){
    this._setExpState('p1')
  }
  _P2click(){
    this._setExpState('p2')
  }
  _P3click(){
    this._setExpState('p3')
  }
  _P4click(){
    this._setExpState('p4')
  }

  render(){

    let Content = <Karakom />;
    // let Content = <{this.getState('component')} />;

    if (this.state.p2){
      Content = <Tompang />
    }
    else if (this.state.p3){
      Content = <Milieu />
    }
    else if (this.state.p4){
      Content = <Cheq />
    }

    return (
      <div className="Showcase-panel">
        <h1 className="title">Portfolio</h1>
        <div className="projNav">
          <div className={this._getClassName('p1')} onClick={this._P1click.bind(this)}>Karakom</div>
          <div className={this._getClassName('p2')} onClick={this._P2click.bind(this)}>Tompang</div>
          <div className={this._getClassName('p3')} onClick={this._P3click.bind(this)}>Milieu</div>
          <div className={this._getClassName('p4')} onClick={this._P4click.bind(this)}>Cheq</div>
        </div>
        {Content}
      </div>
    )
  }
}

export default Showcase;
