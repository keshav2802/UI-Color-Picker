import React, {Component} from 'react';

import Palette from './components/Palette/Palette';
import {seedColors} from './seedColors';
import { generatePalette } from './helper';

class App extends Component {
  render() {
    console.log(generatePalette(seedColors));
    return (
      <div className="App">
        <Palette seedColors={seedColors} />
      </div>
    )
  }
}

export default App;