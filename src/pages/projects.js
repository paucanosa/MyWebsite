import React from 'react';
import Layout from '../components/layout';
import ProjectBox from '../components/projects/projectBox';
import projects from '../data/projects';
import { UserTopic } from '../styles/aboutStyle';
import { ProjectWrapper } from '../styles/projectsStyle';
export default function Projects() {
  return (
    <Layout>
      <ProjectWrapper>
        {projects.map((item) => (
          <ProjectBox info={item} />
        ))}
      </ProjectWrapper>
    </Layout>
  );
}
