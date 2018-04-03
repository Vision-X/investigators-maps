import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer.js';


class App extends Component {
  constructor() {
    super();

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
              <MapContainer />
          </section>
          </main>
      </div>
    );
  }
}

export default App;
