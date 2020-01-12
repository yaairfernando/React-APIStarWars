import React from 'react';

const FilmItem = ({film}) => {
  console.log(film)
  return(
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          IMAGE
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <p className="card-text">Director: {film.director}</p>
            <p className="card-text">Producer: {film.producer}</p>
            <p className="card-text">Release: {film.release_date}</p>
            <p className="card-text">Descrition: {film.opening_crawl}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmItem;