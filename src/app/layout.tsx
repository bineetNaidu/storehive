import { Navbar } from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { NextAuthProvider } from '@/components/NextAuthProvider';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'StoreHive',
  description: 'The hive for all your shopping needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-brand-primary min-h-screen container mx-auto md:px-4 h-full`}
      >
        <NextAuthProvider>
          <Navbar />
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
