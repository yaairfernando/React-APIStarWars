import React, { Component } from 'react';
import Films from './Films';
import FilmsApi from '../components/api/FilmsApi';
import Loader from '../components/Loader';
import styled from 'styled-components';

const Body = styled.div`
  background: rgb(9,8,10);
  background: linear-gradient(90deg, rgba(9,8,10,1) 0%, rgba(194,154,125,1) 48%, rgba(115,13,78,1) 100%, rgba(0,212,255,1) 100%);
`

class App extends Component {

  state = {
    films: []
  }

  componentDidMount = async () => {
    const response = await FilmsApi.post('/getFilms')
    const films = response.data.contextWrites.to[0].results
    this.setState({
      films
    });
  }

  renderContent() {
    if (this.state.films.length === 0) {
      return <Loader />
    } 
    if (this.state.films) {
      return <Films films={this.state.films} />
    }
  }

  render() {
    return(
      <Body>
        {this.renderContent()}
      </Body>
    )
  };
};


export default App;