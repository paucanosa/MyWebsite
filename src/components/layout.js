import React from 'react';
import styled from 'styled-components';
import Navbar from './navBar/navBar';

const Wrapper = styled.div`
  background-color: white;
  background-image: none;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: auto;
  background-position: bottom;
  padding: 5% 8%;
  position: relative;
  @media (max-width: 700px) {
    min-height: 100vh;
    height: auto;
  }
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
}

//CeraPro, 'Avenir Next','Avenir',Helvetica,Ubuntu,'DejaVu Sans',Arial,sans-serif
