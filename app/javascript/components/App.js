import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Species from '../components/Species/Species';
import Films from '../components/Films/Films'
import FilmsApi from '../components/api/FilmsApi';
import Header from '../components/Util/Header';
import { loginWithGoogle } from './Firebase'
 

class App extends Component {
  state = {
    films: [],
    planets: [],
    people: [],
    species: [],
    userInfo: {},
    loggedIn: false,
    error: ''
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
    const userInfo = localStorage.getItem('userInfo')
    userInfo ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false})
    this.setState({ userInfo })
    console.log(userInfo)
    console.log("MOunting")
    this.setState({
      films,
      planets,
      people,
      species
    });
  }
  
  doGoogleLogin = async () => {
    let user = await loginWithGoogle()
    if(!user) {
      this.setState({ error: user.message })
    }
    if(user) {
      let userInfo = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
      }
      this.setState({ userInfo, loggedIn: true })
      console.log(userInfo)
      this.saveStorage(userInfo)
    }
  }
  
  saveStorage = (userInfo) => {
    localStorage.userInfo = JSON.stringify(userInfo);
  }

  onClick = () => {
    this.doGoogleLogin()
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
            <Header onClick={this.onClick} userInfo={this.state.userInfo} loggedIn={this.state.loggedIn} error={this.state.error} />
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