import FooterJoin from '@/components/globals/FooterJoin';
import ProjectsBanner from '@/components/projects/ProjectsBanner';
import React from 'react';
import 'animate.css';

export const metadata = {
  title: 'Our Recent Projects',
};

const ProjectsPage = () => {
  return (
    <>
      <ProjectsBanner />
      <FooterJoin />
    </>
  );
};

export default ProjectsPage;
