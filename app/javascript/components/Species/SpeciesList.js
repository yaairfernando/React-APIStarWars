import React, { Component } from 'react';
import SpecieItem from './SpecieItem';
import styled from 'styled-components'

const Div = styled.div`
  font-size: 22px;
  color: #fff;
  text-align: center;
`

class SpeciesList extends Component {

  state = {
    favorites: []
  }
  onClick = (e) => {
    e.preventDefault()
    // console.log(e.target.getAttribute('data'))
    let id = e.target.getAttribute('data')
    let currentSpecie = this.props.species.filter(s => s.id == parseInt(id))
    console.log(currentSpecie[0].name)
    let currState = this.state.favorites
    if(currState.length === 0){
      this.setState({ favorites: [...this.state.favorites, currentSpecie[0]], repeat: false })
      console.log("First")
    }
    if(currState.length > 0){
      currState.map((curr) => {
        if(curr.name != currentSpecie.name) {
          console.log("Different")
          this.setState({ favorites: [...this.state.favorites, currentSpecie[0]], repeat: false })
        }
        if(curr.name === currentSpecie[0].name) {
          console.log("Equal")
          this.setState({ repeat: true })
        }
      })
    }
    // console.log(currentSpecie);
    console.log(this.state.favorites)
    
  }

  render() {
  console.log(this.props.species)

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