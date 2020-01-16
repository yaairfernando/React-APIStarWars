import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const ImageFilm = (props) => {
  console.log(props)
  return(
    <Image src={props.picture} alt="Logo" />
  )
};

export default ImageFilm;