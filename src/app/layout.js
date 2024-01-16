import Navbar from '@/components/globals/navbar/Navbar';
import './globals.css';
import { Inter, Roboto, Poppins } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
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
  description: `Welcome to the leading software development company in Lagos. At Jaflah Software Development Company, we have the best hands in software related solutions such as web and mobile app development, app and website management and maintenance, issue debugging, UI/UX design, motion and general graphics design.`,
  keywords: [
    'Website development',
    'Jaflah',
    'Jaflah software',
    'Jaflah software development company',
    'Mobile app development',
    'Web design',
    'Web development',
    'Web development company',
    'Web developers in Lagos',
    'Mobile app developers in Lagos',
    'Mobile app developers in Nigeria',
    'Web developers in Nigeria',
    'UI/UX design in Nigeria',
    'UI/UX design in Lagos',
  ],
  author: ['Tunde Mudashir', 'Kehinde Adetule', 'Adeshoga Mariam'],
  metadataBase: new URL('https://jaflah.com.ng'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
