import React, { Component } from 'react';
import Films from './Films';
import FilmsApi from '../components/api/FilmsApi';
import Loader from '../components/Loader';

class App extends Component {

  state = {
    films: []
  }

  componentDidMount = async () => {
    const response = await FilmsApi.post('/getFilms')
    const films = response.data.contextWrites.to[0].results
    this.setState({
      films
    });
  }

  renderContent() {
    if (this.state.films.length === 0) {
      return <Loader />
    } 
    if (this.state.films) {
      return <Films films={this.state.films} />
    }
  }

  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  };
};


export default App;