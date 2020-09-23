import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './Palette.css';
import NavBar from '../NavBar/NavBar';

class Palette extends Component {
	state = {
		level: 600,
		format: "hex"
	};

  changeLevel = (newLevel) => {
    this.setState({level: newLevel});
	}
	
	changeFormat = (val) => {
		this.setState({format: val});
	}

	render() {
		const colorBoxes = this.props.palette[this.state.level].map((color) => (
			<ColorBox background={color[this.state.format]} name={color.name} />
		));

		return (
			<div className='Palette'>
				<NavBar level={this.state.level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} />
				<div className='Palette-colors'>{colorBoxes}</div>
			</div>
		);
	}
}

export default Palette;
