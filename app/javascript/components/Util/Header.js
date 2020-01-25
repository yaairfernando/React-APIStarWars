import React from 'react';
import styled from 'styled-components';
import Logo from '../img/StarWarsLogo.png'
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-size: 35px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #fff;
  background: black;
  text-align: center;
  justify-content: flex-start;

  @media(max-width: 992px) {
    display: none;
  }

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

        @media (max-width: 1200px) {
          padding: 0 20px;
        }

        &:hover {
          cursor: pointer;
          text-decoration: none;
          background-size: 4px 90px;
          color: black;
        }

        & > img {
          @media (max-width: 1200px) {
            width: 45% !important;
          }
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
  height: 100%;
  margin: 0px;
  padding: 0 87px;
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

  & > div.userInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5px;
    color: #fff;

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

const Nav = styled.nav`
  @media(max-width: 992px) {
    background: #282C34;
    height: 50px;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    transition: all 0.5s ease-out;

    & > div.d-flex {
      transition: all 0.5s ease-out;
      position: absolute;
      left: -350px;
      z-index: 3;
    }

    & > div.d-flex.no-margin {
      transition: all 0.5s ease-out;
      position: absolute;
      left: 0%;
      z-index: 3;
    }
  }

  & > button.navbar-toggler {
    margin: 4px 13px;
    background: white;
    border-radius: 5px;
  }
`

const BtnMenu = styled.div`
  display: none;
  @media(max-width: 992px) {
    display: block;
    cursor: pointer;
    transition: all 0.5s ease-out;
    margin: 15px 0 0 20px;
    height: 21px;
    opacity: 1;

    &:hover, &:active, &:focus {
      & > div.btn-line {
        background: #fff !important;
        opacity: 1;
      }
    }
  
    & > div.btn-line {
      width: 29px;
      transition: all 0.5s ease-out;
      height: 3px;
      margin: 0 0 5px 0;
      background: #444;
    }

    &.close {
      transform: rotate(180deg);
      height: 21px;
      opacity: 1;

      & > .btn-line {
        &:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
      }
    }
  }
`

const Menu = styled.div`
  display: none;
  @media(max-width: 992px) {
    display: block;
    width: 350px;
    height: 100vh !important;

    & > ul {
      flex-direction: column-reverse !important;
      background: #343A40;
      padding: 20px;
      margin: 0 !important;
      width: 100%;
      justify-content: flex-end !important;
      height: 100%;

      & > div.logo-container {
        border: none !important;
        & > a.logo {
          flex-grow: 5;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding: 20px;
  
          & > img {
            width: 65% !important;
          }
        }
      }


      & > a.link, & > button {
        width: 100%;
        letter-spacing: 2px;
        padding: 10px;
        color: #999;
        text-align: center;
        font-size: 17px !important;
        text-transform: uppercase;
        margin-bottom: 2px;
        height: auto;
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

      & > div {
        border: 0 !important;
        height: auto !important;
        border-bottom: 1px solid #999 !important;
        flex-direction: column-reverse;
      }
    }
  }

  @media(max-width: 768px) {
    & > ul {
      & > div.logo-container {
        & > a.logo{
          & > img {
            width: 50% !important;
          }
        }
        & > div {
          padding: 19px 5px;
    
          & > div.userInfo {
            padding: 5px 0;
            color: #fff;
          }
        }
      }
    }
  }

`

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.menu = React.createRef()
    this.divMenu = React.createRef()
  }

  render() {
    const userInfo = () => {
      if(this.props.loggedIn) {
        return (
          <Div>
            <div className="userInfo">
              <h5>{this.props.userInfo.displayName}</h5>
              <small>{this.props.userInfo.email}</small>
              <button onClick={this.props.signOut}>SignOut</button>
            </div>
            <div className="img-container">
              <img src={this.props.userInfo.photoURL} />
            </div>
          </Div>
        )
      }
    }
    const onClick = () => {
      const divMenu = this.divMenu.current;
      const menuBtn = this.menu.current;
      menuBtn.classList.toggle("close")
      divMenu.classList.toggle("no-margin")
    }
    return (
      <div className="sticky-top mb-4">
        <Nav className="navbar navbar-expand-lg p-0">
          <div className="d-flex" ref={this.divMenu}>
            <Menu id="navbarSupportedContent">
              <ul className="d-flex justify-content-between w-100">
                <div className="logo-container d-flex flex-grow-1 align-items-end">
                  <Link to="/" className="w-100 logo d-flex align-items-end justify-content-center">
                    <img src={Logo} style={{ width: "23%" }} />
                  </Link> 
                </div>
                  <Link to="/films" className="link" >Films</Link>
                  <Link to="/species" className="link" >Species</Link>
                
                {!this.props.loggedIn ? <Btn onClick={this.props.logIn}>LogIn</Btn> : '' }
                {userInfo()}
              </ul>
            </Menu>
            <BtnMenu class="menu-btn" ref={this.menu} onClick={onClick}>
                <div class="btn-line"></div>
                <div class="btn-line"></div>
              <div class="btn-line"></div>
            </BtnMenu>
          </div>
          <Container className="mb-5" id="navbarSupportedContent">
            <ul className="d-flex justify-content-between align-items-center w-100">
              <a className="" href="#">Navbar</a>
              <div className="links-container">
                <Link to="/films" >Films</Link>
                <Link to="/" className="w-100">
                  <img src={Logo} style={{ width: "23%" }} />
                </Link> 
                <Link to="/species" >Species</Link>
              </div>
              {!this.props.loggedIn ? <Btn onClick={this.props.logIn}>LogIn</Btn> : '' }
              {userInfo()}
            </ul>
            <div>
          </div>
          </Container>
        </Nav>
        
      </div>
      
    );

  }

};

export default Header;