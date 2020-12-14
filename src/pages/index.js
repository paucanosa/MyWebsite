import React from 'react';
import Layout from '../components/layout';
import about from '../data/About';
import fotoPau from '../assets/fotoLinkedinCuadrada.jpg';
import { UserTopic, UserTitle, AboutWrapper, UserDescription } from '../styles/aboutStyle';
import AboutBox from '../components/about/about';
export default function Home() {
  return (
    <Layout>
      <AboutWrapper>
        <img
          src={fotoPau}
          alt="pau self"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            alignContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
          }}
        />
        <UserTitle>Pau CD</UserTitle>
        <UserDescription>
          <div>
            <p>
              Hi! Welcome to my portfolio. I am a CS student specializing on Software Engineering. Based in Girona, now
              living in Barcelona. Currently employed at{' '}
              <a href="https://prenomics.com/en" style={{ backgroundImage: 'none', color: '#1ca086' }}>
                Prenomics
              </a>
              .
            </p>
          </div>
        </UserDescription>
        <UserTopic>
          {about.map((item) => (
            <AboutBox info={item} />
          ))}
        </UserTopic>
      </AboutWrapper>
    </Layout>
  );
}
