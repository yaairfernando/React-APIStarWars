import React, { Component } from 'react';
import propTypes from 'prop-types';
import FilmItem from '../components/FilmItem';

class Films extends Component {
  render() {
    const Films = this.props.films.map((film, indx) => {
      return <FilmItem key={indx} film={film} planets={this.props.planets} people={this.props.people} />
    })
    return(
      <div className="container pr-4 pl-4">{Films}</div>
    )
  }
}

Films.propTypes = {
  films: propTypes.array.isRequired,
  planets: propTypes.array.isRequired
}

export default Films;