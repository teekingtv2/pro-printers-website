/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { carouselSettings } from '@/utils/carousel-setting';
import { projectsData } from '@/data/data';
import PageHeader from '../globals/PageHeader';

const ProjectsBanner = () => {
  const projects = projectsData;

  return (
    <div className="flex h-[92vh] md:h-[90vh]">
      <div className="relative w-full h-full mx-auto px-4 flex flex-col justify-center items-start pb-12 md:pb-2">
        <PageHeader title="Projects Portfolio" subheader="Our" header="Recent Projects" />

        {/* <div className="flex justify-between items-center w-full"> */}
        <Carousel
          responsive={carouselSettings}
          infinite={true}
          className="flex items-center w-full"
        >
          {projects &&
            projects.map((proj, id) => (
              <div key={proj.id}>
                <ProjectCard proj={proj} id={id} />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectsBanner;
