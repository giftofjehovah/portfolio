import React, { Component } from 'react';
import './style/App.css';
import './style/skeleton.css';

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      showMenu: false,
    }
  }

  _menuClick(){
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render(){
    let menuLinks;

    if (this.state.showMenu) {
      menuLinks =
      <div className="page">
        <div className="menuContent">
          <a href="#about">About me</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>;
    }

    return(
      <div className="navpage">
        <div onClick={this._menuClick.bind(this)} id="hamburger">
          <span className="burgerBars"></span>
          <span className="burgerBars"></span>
          <span className="burgerBars"></span>
        </div>
        {menuLinks}
      </div>
    )
  }
}

export default Navbar;
