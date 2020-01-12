import React, { Component } from 'react';
import Films from './Films';

class App extends Component {

  state = {
    films: []
  }

  fetchFilms = (films) => {
    this.setState({
      films
    });
  }

  render() {
    return(
      <div>
        <Films fetchFilms={this.fetchFilms} films={this.state.films} />
      </div>
    )
  };
};


export default App;