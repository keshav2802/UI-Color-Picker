import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    return (
      <CopyToClipboard text={this.props.background}>
        <div className="ColorBox" style={{background: this.props.background}}>
        <div className="copy-container">
          <div className="box-content">
            <span>{this.props.name}</span>
          </div>
          <button className="copy-button">COPY</button>
        </div>
      </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox;