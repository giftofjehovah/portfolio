import React, { Component } from 'react';
import './style/App.css';
import Cover from './Cover';
import About from './About';
import Education from './Education';
import Showcase from './Showcase';
import Contact from './Contact';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Cover />
        <About />
        <Education />
        <Showcase />
        <Contact />
      </div>
    );
  }
}

export default App;
