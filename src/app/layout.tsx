import { Navbar } from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { NextAuthProvider } from '@/components/NextAuthProvider';
import { ToastWrapper } from '@/components/ToastWrapper';

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
          <ToastWrapper />
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
