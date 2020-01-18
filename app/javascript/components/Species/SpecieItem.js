import React, { Component } from 'react';

class SpecieItem extends Component {
  render() {
    console.log(this.props.specie)
    const { name, language, skin_color}  = this.props.specie
    // console.log(specie);
    return(
      <div>
        { name }
      </div>
    )
  };
};

export default SpecieItem;