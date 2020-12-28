import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  min-height: 287px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 3% 2%;
  margin-right: 3%;
  margin-bottom: 3%;
  width: 47%;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.5s ease-out;

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
const ProjectBox = ({ info }) => (
  <Box>
    <h3>{info.title}</h3>
    <p> {info.description}</p>
  </Box>
);

export default ProjectBox;
