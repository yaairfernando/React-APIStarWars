import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Species from '../components/Species/Species';
import Films from '../components/Films/Films'
import FilmsApi from '../components/api/FilmsApi';
import Header from '../components/Util/Header';
import { loginWithGoogle, signOutGoogle } from './Firebase'
 
function PrivateRoute({path, component, ...rest}) {
  let user = localStorage.getItem('userInfo')
  user = JSON.parse(user)
  if(user && user.displayName) {
    return <Route path={path} component={component} {...rest} />
  }else {
    return <Redirect to="/" {...rest} />
  }
}

const home = () => {
  return(
    <div className="container text-white">HOme</div>
  )
}

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
    let userInfo = localStorage.getItem('userInfo')
    userInfo = JSON.parse(userInfo);
    userInfo ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false})
    this.setState({ userInfo })
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
      this.saveStorage(userInfo)
    }
  }

  doGoogleSignOut = async () => {
    let user = await signOutGoogle()
    console.log(user)
    this.setState({ userInfo: {}, loggedIn: false, error: '' })
    localStorage.removeItem('userInfo')
  }
  
  saveStorage = (userInfo) => {
    localStorage.userInfo = JSON.stringify(userInfo);
  }

  loggedIn = () => {
    this.doGoogleLogin()
  }

  signOut = () => {
    this.doGoogleSignOut()
  }

  
  render() {
    console.log(this.state);
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
            <Header 
              logIn={this.loggedIn} 
              signOut={this.signOut}
              userInfo={this.state.userInfo} 
              loggedIn={this.state.loggedIn} 
              error={this.state.error} />
            <Route exact path='/' component={home} />
            {routes.map(({ path, component: C, key }) =>(
              <PrivateRoute key={key} path={path} render={C} />
            ))}
          </div>
        </BrowserRouter>
      </div>
    )
  };
};


export default App;