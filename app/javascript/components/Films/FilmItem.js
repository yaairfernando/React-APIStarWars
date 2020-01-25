import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import PlanetsModal from '../Modals/PlanetsModal'
import PeopleModal from '../Modals/PeopleModal'
import ANewHope from '../img/ANewHope.png';
import AttackoftheClones from '../img/AttackoftheClones.jpeg';
import ReturnoftheJedi from '../img/ReturnoftheJedi.jpeg'
import RevengeoftheSith from '../img/RevengeoftheSith.png'
import TheEmpireStrikesBack from '../img/TheEmpireStrikesBack.jpeg'
import TheForceAwakens from '../img/TheForceAwakens.png'
import ThePhantomMenace from '../img/ThePhantomMenace.png'
import ImageFilm from './ImageFilm';

const Container = styled.div`
  box-shadow: 1px 3px 13px rgba(255,255,255,0.5), -1px -4px 11px rgba(255,255,255,0.5);
  border: none !important;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 1px 3px 13px rgba(255,255,255,0.9), -1px -4px 11px rgba(255,255,255,0.9);
    transform: scale(1.05);
  }
`

const CardBody = styled.div`
  background: #282727;
  color: #aaa;
  font-size: 15px;

  & > h5 {
    color: #fff !important;
    font-size: 22px !important;
    text-transform: uppercase !important;
  }
`

const Button = styled.button`
  color: #fff;
  background-color: #880E4F;
  border: 2px solid #fff;
  margin: 0px 10px;
  padding: 5px 28px;
  transition: all 0.4s ease;

  &:hover {
    background: transparent;
    cursor: pointer
  }
`

const Div = styled.div`  
  border-right: 2px solid #9e4f60;
  // &::after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   width: 100%;
  //   height: 100%;
  //   opacity: 0.2;
  //   background: linear-gradient(to bottom right, rgba(255, 0, 0, 0.7) 15%, rgba(0, 0, 0, 1));
  // }
`

const Row = styled.div`
  border-radius: 53px 0 0 70px;
  padding: 0px;
  box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
`

const pictures = [
  { pic: ANewHope },
  { pic: AttackoftheClones },
  { pic: ReturnoftheJedi },
  { pic: RevengeoftheSith },
  { pic: TheEmpireStrikesBack },
  { pic: TheForceAwakens },
  { pic: ThePhantomMenace }
]

class FilmItem extends React.Component {

  state = {
    show: false,
    showP: false,
    planetsArr: [],
    peopleArr: []
  }

  showModal = () => {
    this.setState({ show: true })
  }

  componentDidMount () {
    let planetsArr = [];
    this.props.planets.map((planet) => {
      this.props.film.planets.map((film) => {
        if (planet.url === film){
          planetsArr.push(planet)
        }
      })
    })
    this.setState({ planetsArr });
  }

  showModalP = () => {
    this.setState({ showP: true })
    let peopleArr = [];
    this.state.planetsArr.map((resident) => {
      resident.residents.map((res) => {
      this.props.people.map((person) => {
          if (person.url === res) {
            peopleArr.push(person);
          }
        })
      })
    })
    this.setState({ peopleArr });
  }


  hideModal = () => {
    this.setState({ show: false })
  }

  hideModalP = () => {
    this.setState({ showP: false })
  }

  

  render() {
    const title = this.props.film.title.replace(/\s+/g, '')
    return(
      <Container className="card mb-5">
        <Row className="row no-gutters">
          <Div className="col-md-4">
            { pictures.map((pic, idx) => {
              if(pic.pic.includes(title)) {
                return <ImageFilm key={idx} picture={pic.pic} />
              }
            })}
          </Div>
          <div className="col-md-8">
            <CardBody className="card-body">
              <h5 className="card-title">{this.props.film.title}</h5>
              <p className="card-text">Director: {this.props.film.director}</p>
              <p className="card-text">Producer: {this.props.film.producer}</p>
              <p className="card-text">Release: {this.props.film.release_date}</p>
              <p className="card-text">Descrition: {this.props.film.opening_crawl}</p>
              <Button className="" onClick={this.showModal} data-toggle="modal" data-target="#exampleModalCenter" >Planets</Button>
              <Button className="" onClick={this.showModalP} data-toggle="modal" data-target="#exampleModalCenter" >People</Button>
              <PeopleModal show={this.state.showP} onHide={this.hideModalP} people={this.state.peopleArr} title={this.props.film.title} />
              <PlanetsModal show={this.state.show} onHide={this.hideModal} planets={this.state.planetsArr} title={this.props.film.title} />
            </CardBody>
          </div>
        </Row>
      </Container>
    )
  }  
}

FilmItem.propTypes = {
  film: propTypes.object.isRequired,
  planets: propTypes.array.isRequired
}

export default FilmItem;

