import React, { Component } from 'react';
import propTypes from 'prop-types';
import FilmItem from '../components/FilmItem';
import Loader from '../components/Loader';
import FilmsApi from '../components/api/FilmsApi';

class Films extends Component {
  // state = {
  //   films: [],
  //   planets: [],
  //   people: []
  // }

  // componentDidMount = async () => {
  //   const getFilms = await FilmsApi.post('/getFilms')
  //   const getPlanets = await FilmsApi.post('/getPlanets')
  //   const getPeople = await FilmsApi.post('/getPeoples')
  //   const people = getPeople.data.contextWrites.to[0].results
  //   const planets = getPlanets.data.contextWrites.to[0].results
  //   const films = getFilms.data.contextWrites.to[0].results
  //   console.log("MOunting")
  //   this.setState({
  //     films,
  //     planets,
  //     people
  //   });
  // }

  render() {
    console.log(this.props)
    // const Films = this.state.films.map((film, indx) => {
    //   return <FilmItem key={indx} film={film} planets={this.state.planets} people={this.state.people} />
    // })

    const renderContent = () => {
      if (this.props.films.length === 0) {
        return <Loader />
      } 
      if (this.props.films) {
        return this.props.films.map((film, indx) => {
          return <FilmItem key={indx} film={film} planets={this.props.planets} people={this.props.people} />
        })
      }
    }
    return(
      <div className="container pr-4 pl-4">{renderContent()}</div>
    )
  }
}

// Films.propTypes = {
//   films: propTypes.array.isRequired,
//   planets: propTypes.array.isRequired
// }

export default Films;