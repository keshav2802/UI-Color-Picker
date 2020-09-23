import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';

class NavBar extends Component {

  state = {
    format: "hex"
  }

  handleChange = (e) => {
    this.setState({format: e.target.value});
    this.props.changeFormat(e.target.value);
  }

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
        <div className="select-menu">
          <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX-#68d4d4</MenuItem>
            <MenuItem value="rgb">RGB-rgb(90,162,231)</MenuItem>
            <MenuItem value="rgba">RGBA-rgba(138,133,230,1.0)</MenuItem>
          </Select>
        </div>
      </div>
    )
  }
}

export default NavBar;