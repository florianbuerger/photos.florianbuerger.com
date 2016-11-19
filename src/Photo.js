import React, { Component } from 'react';
import Imgix from 'react-imgix';
import './Photo.css';

class Photo extends Component {
  render() {
    return (
      <div className="Image">
        <Imgix 
          aggressiveLoad={true}
          fix={"max"}
          src={"http://bergdude.imgix.net/test.png"}
        />
      </div>
    );
  }
}

export default Photo;
