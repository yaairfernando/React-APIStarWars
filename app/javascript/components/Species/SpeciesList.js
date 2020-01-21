import React, { Component } from 'react';
import SpecieItem from './SpecieItem';
import Favorites from './Favorites';
import styled from 'styled-components'

const Div = styled.div`
  font-size: 22px;
  color: #fff;
  text-align: center;
`

const Column = styled.div`
  height: 100vh;
`

class SpeciesList extends Component {

  state = {
    favorites: []
  }

  componentDidMount() {
    let favorites = localStorage.getItem('favorites');
    favorites = JSON.parse(favorites);
    console.log(favorites);
    this.setState({ favorites })
  }

  onClick = (e) => {
    e.preventDefault()
    // console.log(e.target.getAttribute('data'))
    let id = e.target.getAttribute('data')
    let currentSpecie = this.props.species.filter(s => s.id == parseInt(id))
    let currState = this.state.favorites.filter(f => f.id !== currentSpecie[0].id);
    this.setState({ favorites: [...currState, currentSpecie[0]]})
    localStorage.favorites = JSON.stringify(currState)
    this.props.handleDelete(currentSpecie[0])
  }

  render() {
  console.log(this.state.favorites.length)


  const renderContent = () => {
    if(this.props.species.length === 0) {
      return <Div>There are so many species that you'll like. Try look for one!!</Div>
    }
    if(this.props.species) {
      return this.props.species.map((specie) =>{
        return <SpecieItem key={specie.id} dataId={specie.id} specie={specie} onClick={this.onClick} />
      })
    }
  }

  const renderFavorites = () => {
    if(this.state.favorites.length === 0) {
      return <Div>Add your favorites species here!!!</Div>
    }
    if(this.state.favorites) {
      return this.state.favorites.map((fav) => {
        return <Favorites key={fav.id} fav={fav} dataId={fav.id} />
      })
    }
  }
    return (
      <div className="row mt-3">
        <Column className="col-md-6 col-sm-12">
          <Div className="text-white">Search Results</Div>
          {renderContent()}
        </Column>
        <Column className="col-md-6 col-sm-12">
          <Div className="text-white">Favorites</Div>
           {renderFavorites()}
        </Column>
      </div>
    )
  };
};

export default SpeciesList;