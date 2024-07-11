'use client';

import ContactBody from '@/components/contact/ContactBody';
import Head from 'next/head';
import React from 'react';

// export const metadata = {
//   title: 'Contact Us',
// };

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>{`Contact Us | ${process.env.APP_NAME}`}</title>
      </Head>
      <ContactBody />
    </>
  );
};

export default ContactPage;
