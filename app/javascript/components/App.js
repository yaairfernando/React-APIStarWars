import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Films from './Films';
import Actors from './Actors';
import FilmsApi from '../components/api/FilmsApi';
import Loader from '../components/Loader';
import Header from '../components/Header';

class App extends Component {
  // renderContent() {
  //   if (this.state.films.length === 0) {
  //     return <Loader />
  //   } 
  //   if (this.state.films) {
  //     return <Films films={this.state.films} planets={this.state.planets} people={this.state.people} />
  //   }
  // }

  render() {
    return(
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/films" component={Films} />
            <Route path="/actors" component={Actors} />
          </div>
        </BrowserRouter>
        {/* <div className="mt-5">
          {this.renderContent()}
        </div> */}
      </div>
    )
  };
};


export default App;