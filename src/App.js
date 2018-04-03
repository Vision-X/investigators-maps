import React, { Component } from 'react';
import './App.css';
import MapBuilder from './MapBuilder.js'
// import L from 'leaflet';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }



  render() {
    return (
      <div className="App">
          <header>
              <h1>galvanize</h1>
          </header>
          <main>
          <section>
              <h2>Location</h2>
              <MapBuilder />
          </section>
          </main>
      </div>
    );
  }
}

export default App;
