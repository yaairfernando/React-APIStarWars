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

  handleDelete = (specie) => {
    console.log(specie);
    let newSpecies = this.state.species.filter(f => f.id !== specie.id)
    this.setState({ species: [...newSpecies] })
  }

  render() {
    return(
      <div className="container pr-4 pl-4">
        <SearchBar species={this.props.species} onSubmit={this.onSubmit} />
        <SpeciesList species={this.state.species} handleDelete={this.handleDelete} />
      </div>
    )
  }
}

export default Species;