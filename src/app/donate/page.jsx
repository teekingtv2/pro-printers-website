'use client';

import DonateBody from '@/components/donate/DonateBody';
import Head from 'next/head';

// export const metadata = {
//   title: 'Donate To Us',
// };

const DonatePage = () => {
  return (
    <>
      <Head>
        <title>{`Donate To Us | ${process.env.APP_NAME}`}</title>
      </Head>
      <DonateBody />
    </>
  );
};

export default DonatePage;
