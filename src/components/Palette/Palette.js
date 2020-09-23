import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './Palette.css';
import NavBar from '../NavBar/NavBar';

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
				<NavBar level={this.state.level} changeLevel={this.changeLevel} />
				<div className='Palette-colors'>{colorBoxes}</div>
			</div>
		);
	}
}

export default Palette;
