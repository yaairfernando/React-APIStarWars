import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

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

const FilmItem = (props) => {


  const showPlanet = () => {
    // console.log(props.film);
    props.showPlanet(props.film)
  }
  return(
    
    <Container className="card mb-5">
      <div className="row no-gutters">
        <div className="col-md-4">
          IMAGE
        </div>
        <div className="col-md-8">
          <CardBody className="card-body">
            <h5 className="card-title">{props.film.title}</h5>
            <p className="card-text">Director: {props.film.director}</p>
            <p className="card-text">Producer: {props.film.producer}</p>
            <p className="card-text">Release: {props.film.release_date}</p>
            <p className="card-text">Descrition: {props.film.opening_crawl}</p>
            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" >Planets</button>
          </CardBody>
        </div>
      </div>
    </Container>
  )
}

FilmItem.propTypes = {
  film: propTypes.object.isRequired,
  planets: propTypes.array.isRequired
}

export default FilmItem;

