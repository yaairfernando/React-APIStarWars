import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Species from '../components/Species/Species';
import Films from '../components/Films/Films'
import FilmsApi from '../components/api/FilmsApi';
import Header from '../components/Util/Header';
import { loginWithGoogle } from '../Firebase'
 
library.add(fab, faCheckSquare, faCoffee)
export function FontAwesomeIcon(props) {
  return <i className="fas" />
}

class App extends Component {
  state = {
    films: [],
    planets: [],
    people: [],
    species: []
  }

  componentDidMount = async () => {
    const getFilms = await FilmsApi.post('/getFilms')
    const getPlanets = await FilmsApi.post('/getPlanets')
    const getPeople = await FilmsApi.post('/getPeoples')
    const getSpecies = await FilmsApi.post('/getSpecies')
    const species = getSpecies.data.contextWrites.to[0].results
    const people = getPeople.data.contextWrites.to[0].results
    const planets = getPlanets.data.contextWrites.to[0].results
    const films = getFilms.data.contextWrites.to[0].results
    console.log("MOunting")
    this.setState({
      films,
      planets,
      people,
      species
    });
  }
  
  doGoogleLogin = () => {
    return loginWithGoogle()
      .then(user => {
        console.log(user)
        saveStorage(user)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  
  saveStorage = (storage) => {
    localStorage.storage = JSON.stringify(storage);
  }

  
  render() {
    const films = (props) => {
      return <Films films={this.state.films} planets={this.state.planets} people={this.state.people} />
    }
    const species = (props) => {
      return <Species species={this.state.species} />
    }
    const routes = [
      {
        path: '/films',
        component: films,
        key: 1
      },
      {
        path: '/species',
        component: species,
        key: 2
      }
    ]
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