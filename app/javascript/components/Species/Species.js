import React, { Component } from 'react';
import SearchBar from './SearchBar';

class Species extends Component {
  render() {
  console.log(this.props)
    return(
      <div className="container pr-4 pl-4">
        <SearchBar />
      </div>
    )
  }
}

export default Species;