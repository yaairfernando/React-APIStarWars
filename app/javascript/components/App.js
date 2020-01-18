import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Films from './Films';
import Actors from './Actors';
import FilmsApi from '../components/api/FilmsApi';
import Loader from '../components/Loader';
import Header from '../components/Header';

class App extends Component {
  // renderContent() {
  //   if (this.state.films.length === 0) {
  //     return <Loader />
  //   } 
  //   if (this.state.films) {
  //     return <Films films={this.state.films} planets={this.state.planets} people={this.state.people} />
  //   }
  // }
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
    const actors = (props) => {
      return <Actors films={this.state.films} planets={this.state.planets} people={this.state.people} />
    }
    const routes = [
      {
        path: '/films',
        component: films
      },
      {
        path: '/actors',
        component: actors
      }
    ]
    return(
      <div>
        <BrowserRouter>
          <div>
            <Header />
            {routes.map(({ path, component: C}) =>(
              <Route path={path} render={C} />
            ))}
            {/* // <Route path="/films" component={Films} />
            // <Route path="/actors" component={Actors} /> */}
          </div>
        </BrowserRouter>
        {/* <div className="mt-5">
          {this.renderContent()}
        </div> */}
      </div>
    )
  };
};


export default App;