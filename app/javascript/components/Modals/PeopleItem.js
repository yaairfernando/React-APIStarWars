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

class PeopleItem extends React.Component {
  
  render() {
    return (
      <div className="col-md-6 col-sm-12">
        <Card>
          <h4>{this.props.resident.name}</h4>
          <p>Climate: {this.props.resident.gender}</p>
          {/* <p>Diameter: {this.props.resident.}</p>
          <p>Gravity: {this.props.resident.gravity}</p>
          <p>Population: {this.props.resident.population}</p>
          <p>Rotation Period: {this.props.resident.rotation_period}</p>
          <p>Surface Water: {this.props.resident.surface_water}</p>
          <p>Terrain: {this.props.resident.terrain}</p> */}
        </Card>
      </div>
    )
  }
};

export default PeopleItem;