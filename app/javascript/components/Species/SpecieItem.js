import React, { Component } from 'react';
import styled from 'styled-components'
import ImageSpecie from './ImageSpecie';
import Dug from '../img/species/Dug.jpg'
import Ewok from '../img/species/Ewok.jpg'
import Gungan from '../img/species/Gungan.jpg'
import Hutt from '../img/species/Hutt.png'
import MonCalamari from '../img/species/MonCalamari.jpg'
import Neimodian from '../img/species/Neimodian.jpg'
import Sullustan from '../img/species/Sullustan.jpeg'
import Toydarian from '../img/species/Toydarian.png'
import Trandoshan from '../img/species/Trandoshan.png'
import Yodasspecies from '../img/species/Yodasspecies.jpg'

const pictures = [
  { pic: Dug },
  { pic: Ewok },
  { pic: Gungan },
  { pic: Hutt },
  { pic: MonCalamari },
  { pic: Neimodian },
  { pic: Sullustan },
  { pic: Toydarian },
  { pic: Trandoshan },
  { pic: Yodasspecies }
]

const Card = styled.div`
  border: none !important;
  background: transparent !important;
  transition: all 0.4s ease-in-out

  &:hover {
    border: 1px solid #fff;
    box-shadow: 1px 1px 5px rgba(255,255,255,0.6);
    transform: scale(1.04);
  }
`

const Image = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Body = styled.div`
  & > h5 {
    margin-bottom: 0;
  }

  & > p {
    margin: 0;
  }
`
const Button = styled.button`
  border: 1px solid #fff;
  background: #880E4F;
  position: absolute;
  color: #fff;
  border-radius: 4px;
  right: 52px;
  top: 10px;
  width: 63px;

  &:active,
  &:focus,
  &:visited {
    border-color: #fff !important;
    outline: none !important;
  }
`

class SpecieItem extends Component {

  onClick = (e) => {
    e.preventDefault();
    this.props.onClick(e)
  }

  render() {
    const { name, language, skin_colors }  = this.props.specie
    let nameSpecie = name.replace(/\s+/g, '')
    return(
       <Card className="card mb-2">
        <div className="row no-gutters">
          <Image className="col-md-4">
            { pictures.map((pic, idx) => {
              if(pic.pic.includes(nameSpecie)) {
                return <ImageSpecie key={idx} picture={pic.pic} />
              }
            })}
            
          </Image>
          <div className="col-md-8">
            <Body className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Language: {language}</p>
              <p className="card-text">Skin Color: {skin_colors}</p>
            
              <Button onClick={this.onClick} data={this.props.dataId}>
                ADD
              </Button>
            </Body>
          </div>
        </div>
      </Card>
    )
  };
};

export default SpecieItem;