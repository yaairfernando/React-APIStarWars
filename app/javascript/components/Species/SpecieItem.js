import React, { Component } from 'react';

class SpecieItem extends Component {
  render() {
    console.log(this.props.specie)
    const { name, language, skin_colors}  = this.props.specie
    // console.log(specie);
    return(
       <div className="card mb-5">
        <div className="row no-gutters">
          <div className="col-md-4">
            {/* { pictures.map((pic, idx) => {
              if(pic.pic.includes(title)) {
                return <ImageFilm key={idx} picture={pic.pic} />
              }
            })} */}
            image
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