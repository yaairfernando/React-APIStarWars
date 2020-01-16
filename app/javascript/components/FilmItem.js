import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import PlanetsModal from '../components/Modals/PlanetsModal'
import PeopleModal from '../components/Modals/PeopleModal'
import ANewHope from './img/ANewHope.png';
import AttackoftheClones from './img/AttackoftheClones.jpeg';
import ReturnoftheJedi from './img/ReturnoftheJedi.jpeg'
import RevengeoftheSith from './img/RevengeoftheSith.png'
import TheEmpireStrikesBack from './img/TheEmpireStrikesBack.jpeg'
import TheForceAwakens from './img/TheForceAwakens.png'
import ThePhantomMenace from './img/ThePhantomMenace.png'
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
    let planetsArr = [];
    this.props.planets.map((planet) => {
      this.props.film.planets.map((film) => {
        if (planet.url === film){
          planetsArr.push(planet)
        }
      })
    })
    console.log(planetsArr)
    this.setState({ planetsArr });
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
    console.log(planetsArr)
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
    console.log(peopleArr);
    console.log(this.props.people);
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
        <div className="row no-gutters">
          <div className="col-md-4">
            { pictures.map((pic, idx) => {
              console.log(title)
              console.log(pic.pic)
              if(pic.pic.includes(title)) {
                // return "YESS"
                return <ImageFilm key={idx} picture={pic.pic} />
              }
            })}
          </div>
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
        </div>
      </Container>
    )
  }  
}

FilmItem.propTypes = {
  film: propTypes.object.isRequired,
  planets: propTypes.array.isRequired
}

export default FilmItem;

