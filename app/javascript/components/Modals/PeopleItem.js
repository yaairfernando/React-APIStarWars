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
    console.log(this.props)
    return (
      <div className="col-md-6 col-sm-12">
        <Card>
          <h4>{this.props.resident.name}</h4>
          <p>Gender: {this.props.resident.gender}</p>
          <p>Height: {this.props.resident.height}</p>
          <p>Skin Color: {this.props.resident.skin_color}</p>
          <p>Hair Color: {this.props.resident.hair_color}</p>
          <p>Eye Color: {this.props.resident.eye_color}</p>
        </Card>
      </div>
    )
  }
};

export default PeopleItem;