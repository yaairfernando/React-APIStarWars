import React, { Component } from 'react';
import propTypes from 'prop-types';
import FilmsApi from '../components/api/FilmsApi';

class Films extends Component {

  componentDidMount = async () => {
    const response = await FilmsApi.post('/getFilms')
    const films = response.data.contextWrites.to[0].results
    this.props.fetchFilms(films)
  }

  render() {
    console.log(this.props.films)
    return(
      <div>Films</div>
    )
  }
}

Films.propTypes = {
  fetchFilms: propTypes.func.isRequired,
  films: propTypes.array.isRequired
}

export default Films;