import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import PlanetsModal from '../components/Modals/PlanetsModal'

const Container = styled.div`
  box-shadow: 1px 3px 13px rgba(255,255,255,0.5), -1px -4px 11px rgba(255,255,255,0.5);
  border: none !important;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 1px 3px 13px rgba(255,255,255,0.9), -1px -4px 11px rgba(255,255,255,0.9);
    transform: scale(1.05);
  }
`

const CardBody = styled.div`
  background: #282727;
  color: #aaa;
  font-size: 15px;

  & > h5 {
    color: #fff !important;
    font-size: 22px !important;
    text-transform: uppercase !important;
  }
`

class FilmItem extends React.Component {

  state = {
    show: false,
    planetsArr: []
  }

  showModal = () => {
    this.setState({ show: true })
    let planetsArr = [];
    this.props.planets.map((planet) => {
      this.props.film.planets.map((film) => {
        if (planet.url === film){
          planetsArr.push(planet)
        }
      })
    })
    this.setState({ planetsArr });
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  

  render() {
    return(
      <Container className="card mb-5">
        <div className="row no-gutters">
          <div className="col-md-4">
            IMAGE
          </div>
          <div className="col-md-8">
            <CardBody className="card-body">
              <h5 className="card-title">{this.props.film.title}</h5>
              <p className="card-text">Director: {this.props.film.director}</p>
              <p className="card-text">Producer: {this.props.film.producer}</p>
              <p className="card-text">Release: {this.props.film.release_date}</p>
              <p className="card-text">Descrition: {this.props.film.opening_crawl}</p>
              <button className="btn btn-primary" onClick={this.showModal} data-toggle="modal" data-target="#exampleModalCenter" >Planets</button>
              <PlanetsModal show={this.state.show} onHide={this.hideModal} planets={this.state.planetsArr} title={this.props.film.title} />
            </CardBody>
          </div>
        </div>
      </Container>
    )
  }  
}

FilmItem.propTypes = {
  film: propTypes.object.isRequired,
  planets: propTypes.array.isRequired
}

export default FilmItem;

