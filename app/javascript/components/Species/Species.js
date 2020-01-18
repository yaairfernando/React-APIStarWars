import React, { Component } from 'react';
import SearchBar from './SearchBar';

class Species extends Component {

  onSubmit = (species) => {
    console.log(species);
  }

  render() {
    return(
      <div className="container pr-4 pl-4">
        <SearchBar species={this.props.species} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default Species;