import React, { Component } from 'react';
import './App.css';

import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char';

class App extends Component {

  state = {
    wordEntered: '',
    chars: []
  }

  onTypingHandler = event => {
    this.setState({
      wordEntered: event.target.value,
      chars: event.target.value.split('')
    });
  }

  removeCharHandler = index => {
    const newChars = [...this.state.chars];
    newChars.splice(index, 1);

    this.setState({
      wordEntered: newChars.join(''),
      chars: newChars
    });
  }

  render() {
    let chars = null;
    if (this.state.chars.length > 0) {
      chars = this.state.chars.map((char, index) => {
        return <Char key={index} click={this.removeCharHandler.bind(this, index)} char={char} />
      })
    }

    return (
      <div className="App">
        <input onChange={this.onTypingHandler} type="text" value={this.state.wordEntered} />
        <p>{this.state.wordEntered.length}</p>

        <Validation wordLength={this.state.wordEntered.length} />
        {chars}
      </div>
    );
  }
}

export default App;
