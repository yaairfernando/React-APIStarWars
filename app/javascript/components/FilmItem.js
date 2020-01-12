import React from 'react';

const FilmItem = ({film}) => {
  console.log(film)
  return(
    <div>
      <div>
        <h1>{film.title}</h1>
      </div>
    </div>
  )
}

export default FilmItem;