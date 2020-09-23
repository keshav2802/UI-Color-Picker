import React, {Component} from 'react';

import Palette from './components/Palette/Palette';
import {seedColors} from './seedColors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette seedColors={seedColors} />
      </div>
    )
  }
}

export default App;