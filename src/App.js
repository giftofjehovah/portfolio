import React, { Component } from 'react';
import './style/App.css';
import Cover from './Cover';
import About from './About';
import Showcase from './Showcase';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover />
        <About />
        <Showcase />
        <Contact />
      </div>
    );
  }
}

export default App;