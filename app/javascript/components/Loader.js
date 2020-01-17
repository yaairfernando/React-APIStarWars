import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-size: 17px;
  font-weight: 700;
`

const Loader = () => {
  return (
    <div className="d-flex flex-column  justify-content-center align-items-center vh-100">
      <div className="spinner-border" role="status">
      </div>
        <Text className="mt-4">Loading Star War Films...</Text>
    </div>
  );
};

export default Loader;