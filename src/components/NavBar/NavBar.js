import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="logo">
          UI Color Picker
        </div>
        <div className="slider">
          <Slider
            defaultValue={this.props.level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.props.changeLevel}
          />
        </div>
      </div>
    )
  }
}

export default NavBar;