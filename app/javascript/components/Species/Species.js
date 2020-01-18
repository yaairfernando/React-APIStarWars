import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SpeciesList from './SpeciesList';

class Species extends Component {
  state = {
    species: []
  }

  onSubmit = (species) => {
    this.setState({ species })
  }

  render() {
    return(
      <div className="container pr-4 pl-4">
        <SearchBar species={this.props.species} onSubmit={this.onSubmit} />
        <SpeciesList species={this.state.species} />
      </div>
    )
  }
}

export default Species;