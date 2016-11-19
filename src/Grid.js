import React, { Component } from 'react';
import './Grid.css';

class Grid extends Component {

  constructor(props) {
    super(props);
    const images = [];
    for (let i = 0; i < 10; i++) {
      images.push({
        url: ["http://bergdude.imgix.net/test.png"],
      });
    }
    this.state = { images }
  }

  render() {
    return (
      <div className="Grid">
        {this.state.images.map((image, index) => (
          <div key={index} className="Grid-cell">{image.url}</div>
        ))}
      </div>
    );
  }
}

export default Grid;
