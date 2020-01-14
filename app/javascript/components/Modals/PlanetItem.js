import React from 'react';
import Modal from 'react-bootstrap/Modal'

const PlanetItem = ({planet}) => {
  return (
    <Modal.Body>
      <h4>{planet.name}</h4>
      <p>{planet.climate}</p>
      <p>{planet.diameter}</p>
      <p>{planet.gravity}</p>
      <p>{planet.population}</p>
      <p>{planet.rotation_period}</p>
      <p>{planet.surface_water}</p>
      <p>{planet.terrain}</p>
    </Modal.Body>
  )
};

export default PlanetItem;