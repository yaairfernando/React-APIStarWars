import React, { Component } from 'react';
import propTypes from 'prop-types';
import Loader from '../Util/Loader';
import FilmItem from './FilmItem';
import styled from 'styled-components';

const Container = styled.div`
  @media(max-width: 768px) {
    margin-top: 50px;
    padding: 0 50px !important;
  }
`

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
      <Container className="container pr-4 pl-4">{renderContent()}</Container>
    )
  }
}

// Films.propTypes = {
//   films: propTypes.array.isRequired,
//   planets: propTypes.array.isRequired
// }

export default Films;