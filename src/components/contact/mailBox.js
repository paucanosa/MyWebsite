import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

export const mailBox = styled(Link)`
color: #00000
justify-content: center;
min-height: 70px;
border-radius: 8px;
background-color: #ffffff;
background-image: none;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
padding: 1% 1%;
margin-right: 3%;
margin-bottom: 3%;
width: 20%;
max-width: 220px;
display: flex;
flex-direction: row;
transition: box-shadow 0.5s ease-out;
justify-content
:hover {
  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12),
    0 5px 5px -3px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s;
}
:last-of-type {
  margin-right: 0;
}
p {
  margin-bottom: 0px;
}
@media (max-width: 700px) {
  width: 100%;
  min-height: auto;
  padding: 5%;
}
`;

export const SiteTitle = styled.h1`
  display: flex;
  align-items: center;
  color: black;
  margin-left: 20px;
`;

const MailBox = ({ info }) => (
  // <a href="mailto:canosapau@gmail.com">
  <mailBox to="/">
    <img
      src={info.srcImg}
      style={{
        width: '50px',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
      }}
    ></img>
    <SiteTitle>{info.title}</SiteTitle>
  </mailBox>
  //</a>
);

export default MailBox;
