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
  title: process.env.APP_NAME,
  description: `Welcome to the leading software development compamy in Lagos. At Jaflah Software Development Company, we have the best hands in software related solutions such as web and mobile app development, app and website management and maintenance, issue debugging, UI/UX design, motion and general graphics design.`,
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
