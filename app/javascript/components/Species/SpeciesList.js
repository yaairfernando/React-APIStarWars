import React, { Component } from 'react';
import SpecieItem from './SpecieItem';
import styled from 'styled-components'

const Div = styled.div`
  font-size: 22px;
  color: #fff;
  text-align: center;
`

class SpeciesList extends Component {
  render() {
  console.log(this.props.species)

  const renderContent = () => {
    if(this.props.species.length === 0) {
      return <Div>There are so many species that you'll like. Try look for one!!</Div>
    }
    if(this.props.species) {
      return this.props.species.map((specie) =>{
        return <SpecieItem key={specie.average_height} specie={specie} />
      })
    }
  }
    return (
      <div className="row mt-3">
        <div className="col-md-6 col-sm-12">
        {renderContent()}</div>
         <div className="col-md-6 col-sm-12"></div>
      </div>
    )
  };
};

export default SpeciesList;