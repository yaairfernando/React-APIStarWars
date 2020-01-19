import React, { Component } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

class SpecieItem extends Component {
  render() {
    console.log(this.props.specie)
    const { name, language, skin_colors}  = this.props.specie
    let nameSpecie = name.replace(/\s+/g, '')
    return(
       <Card className="card mb-2">
        <div className="row no-gutters">
          <Image className="col-md-4">
            { pictures.map((pic, idx) => {
              if(pic.pic.includes(nameSpecie)) {
                console.log("YES")
                return <ImageSpecie key={idx} picture={pic.pic} />
              }
            })}
            
          </Image>
          <div className="col-md-8">
            <Body className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Language: {language}</p>
              <p className="card-text">Skin Color: {skin_colors}</p>
              <button>
                <FontAwesomeIcon icon="check-square" />
              </button>
            </Body>
          </div>
        </div>
      </Card>
    )
  };
};

export default SpecieItem;