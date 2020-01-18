import React, { Component } from 'react';
import SpecieItem from './SpecieItem';

class SpeciesList extends Component {
  render() {
  console.log(this.props.species)

  const renderContent = () => {
    if(species.length === 0) {
      return <div>There are no species that matches your search. Try with a different combination of words!!</div>
    }else {
      return this.props.species.map((specie) =>{
        return <SpecieItem key={specie.average_height} specie={specie} />
      })
    }
  }
    return (
      <div>{renderContent()}</div>
    )
  };
};

export default SpeciesList;