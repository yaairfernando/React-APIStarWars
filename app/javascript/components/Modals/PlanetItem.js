import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 20px 30px;
  border: 1px solid #999;
  margin: 15px 4px;
  border-radius: 4px;

  & > p {
    line-height: 20px;
    color: #616161;
  }
`

const PlanetItem = ({planet}) => {
  return (
    <div className="col-md-6 col-sm-12">
      <Card>
        <h4>{planet.name}</h4>
        <p>Climate: {planet.climate}</p>
        <p>Diameter: {planet.diameter}</p>
        <p>Gravity: {planet.gravity}</p>
        <p>Population: {planet.population}</p>
        <p>Rotation Period: {planet.rotation_period}</p>
        <p>Surface Water: {planet.surface_water}</p>
        <p>Terrain: {planet.terrain}</p>
      </Card>
    </div>
  )
};

export default PlanetItem;