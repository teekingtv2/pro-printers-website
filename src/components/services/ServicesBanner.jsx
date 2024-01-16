'use client';
import React from 'react';
import PageHeader from '../globals/PageHeader';
import HomeServices from '../home/section-3-services/HomeServices';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeServiceCard from '../home/section-3-services/HomeServiceCard';
import { carouselSettings } from '@/utils/carousel-setting';
import { serviceData } from '@/data/data';
import ServiceCard from './ServiceCard';
import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';

const ServicesBanner = () => {
  const services = serviceData;
  return (
    <div className="flex h-[92vh] md:h-[90vh] ">
      <div className="relative w-full h-full mx-auto px-4 flex flex-col justify-center items-start pb-12 md:pb-2">
        <PageHeader title="Our Services" subheader="What" header="We Do" />
        <Carousel
          responsive={carouselSettings}
          infinite={true}
          className="flex items-center w-full"
        >
          {services &&
            services.map((service) => (
              <div key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
        </Carousel>
        <div className="flex justify-start">
          <Link
            href="/projects"
            className="mt-8 text-center text-[#FBAD18] flex justify-center items-center gap-2"
          >
            <span>Recent projects</span>
            <FaArrowCircleRight />
          </Link>
        </div>
        {/* <HomeServices /> */}
      </div>
    </div>
  );
};

export default ServicesBanner;
