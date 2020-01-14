import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PlanetItem from '../Modals/PlanetItem';

const PlanetsModal = (props) => {
  const Planets = props.planets.map((planet) => {
    return <PlanetItem key={planet.orbital_period} planet={planet} />
  })

  return(
    <div>
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
          <div className="row">
            {Planets.length === 0 ? <div className="mt-5 mb-5"><h5 className="text-center">There are no planets to display for this film!!</h5></div> : Planets}

          </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="btn btn-outline-primary waves-effect">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PlanetsModal;