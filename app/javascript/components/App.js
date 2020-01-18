import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Films from './Films';
import Actors from './Actors';
import FilmsApi from '../components/api/FilmsApi';
import Loader from '../components/Loader';
import Header from '../components/Header';

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
    console.log("MOunting")
    console.log(films)
    console.log(planets);
    this.setState({
      films,
      planets,
      people
    });
  }

  
  render() {
    const films = (props) => {
      return <Films films={this.state.films} planets={this.state.planets} people={this.state.people} />
    }
    const routes = [
      {
        path: '/films',
        component: films,
        key: 1
      },
      {
        path: '/actors',
        component: actors,
        key: 2
      }
    ]
    const actors = (props) => {
      return <Actors films={this.state.films} planets={this.state.planets} people={this.state.people} />
    }
    return(
      <div>
        <BrowserRouter>
          <div>
            <Header />
            {routes.map(({ path, component: C, key }) =>(
              <Route key={key} path={path} render={C} />
            ))}
          </div>
        </BrowserRouter>
      </div>
    )
  };
};


export default App;