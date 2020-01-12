import React, { Component } from 'react';
import Films from './Films';
import FilmsApi from '../components/api/FilmsApi';
import Loader from '../components/Loader';
import Header from '../components/Header';
import styled from 'styled-components';

class App extends Component {

  state = {
    films: [],
    planets: []
  }

  componentDidMount = async () => {
    const getFilms = await FilmsApi.post('/getFilms')
    const getPlanets = await FilmsApi.post('/getPlanets')
    const planets = getPlanets.data.contextWrites.to[0].results
    console.log(planets);
    const films = getFilms.data.contextWrites.to[0].results
    this.setState({
      films,
      planets
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
        <Header />
        <div className="mt-5">
          {this.renderContent()}
        </div>
      </div>
    )
  };
};


export default App;