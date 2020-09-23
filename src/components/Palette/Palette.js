import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
	state = {
		level: 600,
	};

  changeLevel = (newLevel) => {
    this.setState({level: newLevel});
  }

	render() {
		const colorBoxes = this.props.palette[this.state.level].map((color) => (
			<ColorBox background={color.hex} name={color.name} />
		));

		return (
			<div className='Palette'>
				<Slider
					defaultValue={this.state.level}
					min={100}
					max={900}
          step={100}
					onAfterChange={this.changeLevel}
				/>
				<div className='Palette-colors'>{colorBoxes}</div>
			</div>
		);
	}
}

export default Palette;
