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
    padding: 0;
    border-bottom: 1px solid #fff;
    height: 80px;

    & > div.links-container {
      display: flex;
      height: 100%;

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
    <nav className="navbar navbar-expand-lg p-0">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Container className="sticky-top mb-5 collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="d-flex justify-content-between align-items-center w-100">
          <a className="" href="#">Navbar</a>
          <div className="links-container">
            <Link to="/films" >Films</Link>
            <Link to="/" >
              <h1>Star Wars</h1>
            </Link> 
            <Link to="/species" >Species</Link>
          </div>
          {!props.loggedIn ? <Btn onClick={props.logIn}>LogIn</Btn> : '' }
          {userInfo()}
        </ul>
        <div>
      </div>
      </Container>
    </nav>
  );
};

export default Header;

{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */}