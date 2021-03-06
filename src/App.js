import React, {Component} from 'react';

import Palette from './components/Palette/Palette';
import {seedColors} from './seedColors';
import { generatePalette } from './helper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors)} />
      </div>
    )
  }
}

export default App;