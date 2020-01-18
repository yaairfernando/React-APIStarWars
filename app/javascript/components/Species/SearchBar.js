import React, { Component } from 'react';
import styled from 'styled-components'

const H5 = styled.h5`
  background: #880E4F !important;
  color: #fff;
`

const Input = styled.input`
  background: transparent !important;
  transition: border-color 0.2s ease;
  transition: box-shadow 0.2s ease;
  color: #aaa !important;
  font-size: 20px !important;

  &:active,
  &:focus {
    box-shadow: 1px 1px 10px rgba(255,255,255,0.6) !important;
    border-color: #fff !important;
  }
`

const Card = styled.div`
  background: black;
  opacity: 0.7;
`

const Body = styled.div`
  z-index: 5;
`

class SeachBar extends Component {
  state = {
    search: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(e);
  }

  render() {
    console.log(this.state.search)
    return (
    <Card>
      <H5 className="card-header text-center py-4">
        <strong>Find your favorite and add it to your favorites!!!!</strong>
      </H5>
      <Body className="card-body px-lg-5 pt-0 mt-2">
        <form className="text-center" onSubmit={this.onSubmit} >
          <div className="md-form">
            <label className="text-white">Enter your search...</label>
            <Input type="text" 
              className="form-control"
              value={this.state.search}
              name="search"
              onChange={(e) => this.setState({ [e.target.name]: e.target.value })}
              />
          </div>
        </form>
      </Body>
    </Card>
    )
  };
};

export default SeachBar;