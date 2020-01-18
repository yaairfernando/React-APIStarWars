import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-size: 35px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #fff;
  background: black;
  text-align: center;

  & > ul {
    list-style: none;
    margin: 0;
    height: 120px;

    & > li {
      font-size: 13px;
      padding: 5px 12px;
      background: #fff;
      color: black;
      margin: 0 5px;
      border-radius: 4px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: black;
        color: #fff;
        cursor: pointer;
        border: 1px solid #fff;
        box-shadow: 1px 1px 2px #fff;
      }
    }
  }
`

const Header = () => {
  return (
    <Container>
      <ul className="d-flex justify-content-center align-items-center">
        <li>
          <Link to="/films" >Films</Link>
        </li>
        <h1 className="ml-5 mr-5">Star Wars</h1>
        <li>          
        <Link to="/actors" >Actors</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;