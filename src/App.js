import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="Site-root">
        <Header /> 
        <main className="Site-content">
          <Grid />
        </main>
      </div>
    );
  }
}

export default App;
