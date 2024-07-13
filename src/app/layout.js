import Navbar from '@/components/globals/navbar/Navbar';
import '../../public/styles/main.css';
import { Inter, Roboto, Poppins, Raleway } from 'next/font/google';
import Footer from '@/components/globals/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const inter = Inter({ subsets: ['latin'] });
// const poppins = Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: {
    template: `%s | ${process.env.APP_NAME}`,
    default: process.env.APP_NAME,
  },
  applicationName: process.env.APP_NAME,
  description: `Welcome to the Vengo Development & Cultural Association USA (VEDCAUSA), USA chapter - an NGO organisation representing the good Nigerians outside of our dear motherland.`,
  keywords: [
    'Vengo Development & Cultural Association (VEDCA)',
    'Vengo Development & Cultural Association USA (VEDCAUSA)',
    'Vengo Development & Cultural Association USA (VEDCA-USA)',
    'VEDCAUSA',
    'VEDCA',
    'VEDCA non-governmental organization',
    'VEDCA-USA',
  ],
  author: ['Tunde Mudashir - Jaflah Software Developmnt Company LTD'],
  metadataBase: new URL('https://vedcausa.org'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={`${process.env.APP_NAME}`} />
        <meta name="theme-color" content="#03194a" />
        <meta name="msapplication-navbutton-color" content="#03194a" />
        <meta content="#03194a" name="msapplication-navbutton-color" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
        <link rel="icon" href="/images/favicon.png" type="image/<generated>" sizes="<generated>" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={raleway.className}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Navbar />
        <div>{children}</div>
        <Footer />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init()</script>
      </body>
    </html>
  );
}
