import styled from 'styled-components';

export const descriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserTitle = styled.h1`
  font-size: 3.2em;
  font-weight: bold;
  color: #00000;
  @media (max-width: 700px) {
    font-size: 3em;
  }
`;
export const UserDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  p {
    color: #00000;
    max-width: 100%;
    font-weight: 300;
    font-size: 24px;
    line-height: 1.3;
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    p {
      max-width: 100%;
      font-size: 19px;
    }
  }
`;

export const AboutWrapper = styled.div`
  margin: 5% auto;
`;

export const UserTopic = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
