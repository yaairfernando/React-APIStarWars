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
    border-bottom: 1px solid #fff;
    height: 90px;

    & > a {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 80px;
      border: 1px solid #fff;
      border-top: none;
      border-bottom: none;
      font-size: 20px;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 3.5px;
      font-weight: 100;
      background: linear-gradient(to bottom, #e4e4e4 0%, #fff 100%);
      background-position: 0 50%;
      background-repeat: repeat-x;
      background-size: 0 0;
      transition: background-size 0.25s;

      &:hover {
        cursor: pointer;
        text-decoration: none;
        background-size: 4px 90px;
        color: black;
      }
    }
  }
`

const H1 = styled.h1`
  & > a {
    color: #fff;

    &:hover {
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
  }
`

const Header = () => {
  return (
    <Container className="sticky-top mb-5">
      <ul className="d-flex justify-content-center align-items-center">
        
          <Link to="/films" >Films</Link>

          <Link to="/" >
            <h1>Star Wars</h1>
          </Link>

                  
        <Link to="/species" >Species</Link>
        
      </ul>
    </Container>
  );
};

export default Header;