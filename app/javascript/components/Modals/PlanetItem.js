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

class PlanetItem extends React.Component {  
  render() {
    return (
      <div className="col-md-6 col-sm-12">
        <Card>
          <h4>{this.props.planet.name}</h4>
          <p>Climate: {this.props.planet.climate}</p>
          <p>Diameter: {this.props.planet.diameter}</p>
          <p>Gravity: {this.props.planet.gravity}</p>
          <p>Population: {this.props.planet.population}</p>
          <p>Rotation Period: {this.props.planet.rotation_period}</p>
          <p>Surface Water: {this.props.planet.surface_water}</p>
          <p>Terrain: {this.props.planet.terrain}</p>
        </Card>
      </div>
    )
  }
};

export default PlanetItem;