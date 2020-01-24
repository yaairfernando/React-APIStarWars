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
    height: 80px;

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
const Btn = styled.button`
  position: absolute;
  right: 0;
  border: none;
  background: none;
  color: #fff;
  border-left: 1px solid #fff;
  height: 100%;
  margin: 0px;
  padding: 0 37px;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1.9px;
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
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 15px;
  display: flex;
  border-left: 1px solid #fff;
  padding: 20px;
  margin: 0 5px;

  & > div.userInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5px;

    & > h5 {
      font-size: 14px;
      margin: 0;
    }

    & > small {
      font-size: 13px;
    }

    & > button {
      border: none;
      background: transparent;
      color: #fff;
      font-size: 14px;
      margin: 0;
      padding: 0;
    }
  }

  & > div.img-container {
    border-radius: 50%;
    width: 50px;

    & > img {
      width: 100%;
      border-radius: 50%;
    }
  }
`

const Header = (props) => {
  const userInfo = () => {
    if(props.loggedIn) {
      return (
        <Div>
          <div className="userInfo">
            <h5>{props.userInfo.displayName}</h5>
            <small>{props.userInfo.email}</small>
            <button onClick={props.signOut}>SignOut</button>
          </div>
          <div className="img-container">
            <img src={props.userInfo.photoURL} />
          </div>
        </Div>
      )
    }
  }
  return (
    <Container className="sticky-top mb-5">
      <ul className="d-flex justify-content-center align-items-center">
        <Link to="/films" >Films</Link>
        <Link to="/" >
          <h1>Star Wars</h1>
        </Link> 
        <Link to="/species" >Species</Link>
        {!props.loggedIn ? <Btn onClick={props.logIn}>LogIn</Btn> : '' }
        {userInfo()}
      </ul>
      <div>
    </div>
    </Container>
  );
};

export default Header;