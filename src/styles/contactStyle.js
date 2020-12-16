import styled from 'styled-components';
export const ContactTitle = styled.h1`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  font-size: 1.7em;
  font-weight: bold;
  color: #00000;
`;

export const EmailSentence = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1.3em;
  color: #00000;
  @media (max-width: 700px) {
    margin-top: 5%;
    font-size: 1.3em;
  }
`;

export const EmailTitle = styled.a`
  cursor: pointer;
  margin-left: 10px;
  font-size: 1em;
  background-image: none;
  color: #00000;
  @media (max-width: 700px) {
    font-size: 1em;
  }
`;

export const SiteTitle = styled.h1`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  color: #00000;
`;

export const SitesWrapper = styled.div`
  margin-top: 2.5%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 700px) {
    margin-top: 5.5%;
    flex-direction: column;
    align-items: center;
  }
`;
