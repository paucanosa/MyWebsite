import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  margin-top: 20px;
  min-height: 287px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 3% 2%;
  margin-right: 3%;
  margin-bottom: 3%;
  width: 100%;
  display: flex;
  flex-direction: column;

  :last-of-type {
    margin-right: 0;
  }
  a {
    margin-top: auto;
    color: #7fa1e8;
    text-decoration: none;
  }
  @media (max-width: 700px) {
    width: 100%;
    min-height: auto;
    padding: 5%;
  }
`;

const Header = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Title = styled.h3`
  height: auto;
  margin: 0px;
`;
const ExperienceBox = ({ info }) => (
  <Box>
    <Header>
      <Title>{info.title}</Title>
      <img
        src={info.srcImg}
        style={{
          width: '50px',
          height: '50px',
          margin: 0,
          display: 'flex',
          alignSelf: 'center',
        }}
      ></img>
    </Header>

    <p> {info.description}</p>
  </Box>
);

export default ExperienceBox;
