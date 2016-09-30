import React, { Component } from 'react';

export default class FeatureButton extends Component {

  clicking() {
    this.props.cb(this.props.title)
  }

  render(){
    return(
      <div onClick={this.clicking.bind(this)}>{this.props.title}</div>
    )
  }
}
