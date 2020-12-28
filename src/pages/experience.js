import React from 'react';
import ExperienceBox from '../components/experience/experienceBox';
import Layout from '../components/layout';
import experience from '../data/experience';
export default function Experience() {
  return (
    <Layout>
      {experience.map((item) => (
        <ExperienceBox info={item} />
      ))}
    </Layout>
  );
}
