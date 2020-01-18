import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Films from './Films';
import FilmsApi from '../components/api/FilmsApi';
import Loader from '../components/Loader';
import Header from '../components/Header';
import styled from 'styled-components';

const PageOne = () => {
  return(
    <div>PageOne

      <Link to="/pagetwo">Page two!!</Link>
    </div>
  )
}

const PageTwo = () => {
  return(
    <div>PageTwo
      <Link to="/">Page onee!!</Link>
    </div>
  )
}


class App extends Component {

  state = {
    films: [],
    planets: [],
    people: []
  }

  componentDidMount = async () => {
    const getFilms = await FilmsApi.post('/getFilms')
    const getPlanets = await FilmsApi.post('/getPlanets')
    const getPeople = await FilmsApi.post('/getPeoples')
    const people = getPeople.data.contextWrites.to[0].results
    const planets = getPlanets.data.contextWrites.to[0].results
    const films = getFilms.data.contextWrites.to[0].results
    this.setState({
      films,
      planets,
      people
    });
  }

  renderContent() {
    if (this.state.films.length === 0) {
      return <Loader />
    } 
    if (this.state.films) {
      return <Films films={this.state.films} planets={this.state.planets} people={this.state.people} />
    }
  }

  render() {
    return(
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={PageOne} />
            <Route path="/pagetwo" component={PageTwo} />
          </div>
        </BrowserRouter>
        <div className="mt-5">
          {this.renderContent()}
        </div>
      </div>
    )
  };
};


export default App;