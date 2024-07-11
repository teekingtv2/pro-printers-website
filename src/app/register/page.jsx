'use client';
import RegisterBody from '@/components/register/RegisterBody';
import Head from 'next/head';

// export const metadata = {
//   title: 'Register With Us',
// };

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>{`Register With Us | ${process.env.APP_NAME}`}</title>
      </Head>
      <RegisterBody />
    </>
  );
};

export default RegisterPage;
