import React, { Component } from 'react';
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

class SpecieItem extends Component {
  render() {
    console.log(this.props.specie)
    const { name, language, skin_colors}  = this.props.specie
    // console.log(specie);
    let nameSpecie = name.replace(/\s+/g, '')
    return(
       <div className="card mb-5">
        <div className="row no-gutters">
          <div className="col-md-4">
            { pictures.map((pic, idx) => {
              if(pic.pic.includes(nameSpecie)) {
                console.log("YES")
                return <ImageSpecie key={idx} picture={pic.pic} />
              }
            })}
            
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Language: {language}</p>
              <p className="card-text">Skin Color: {skin_colors}</p>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default SpecieItem;