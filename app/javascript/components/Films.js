import React, { Component } from 'react';
import propTypes from 'prop-types';
import FilmItem from '../components/FilmItem';
import Loader from '../components/Loader';
import FilmsApi from '../components/api/FilmsApi';

class Films extends Component {

  render() {
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