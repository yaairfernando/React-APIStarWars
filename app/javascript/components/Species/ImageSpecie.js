import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 63%;
  height: 85%;
  border-radius: 50%;
`

const ImageSpecie = (props) => {
  return(
    <Image src={props.picture} alt="Logo" />
  )
};

export default ImageSpecie;