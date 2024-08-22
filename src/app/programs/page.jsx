import FooterJoin from '@/components/globals/FooterJoin';
import React from 'react';
import 'animate.css';
import ProgramsBody from '@/components/programs/ProgramsBody';

export const metadata = {
  title: 'Our Programs',
};

const ProgramsPage = () => {
  return (
    <>
      <ProgramsBody />
      <FooterJoin />
    </>
  );
};

export default ProgramsPage;
