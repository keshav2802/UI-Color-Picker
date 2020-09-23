import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
  state = {
    isCopied: false
  }

  handleClick = () => {
    this.setState({isCopied: true});
    setTimeout(() => {this.setState({isCopied: false})}, 1000);
  }

  render() {
    return (
      <CopyToClipboard text={this.props.background}>
        <div className="ColorBox" style={{background: this.props.background}} onClick={this.handleClick}>
        <div className="copy-container">
          <div className="box-content">
            <span>{this.props.name}</span>
          </div>
          <button className="copy-button">{this.state.isCopied ? "COPIED!" : "COPY"}</button>
        </div>
      </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox;