import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';

class App extends Component {
  render() {
    return (
      <div className="Site-root">
        <main className="Site-content">
          <Grid />
        </main>
      </div>
    );
  }
}

export default App;
