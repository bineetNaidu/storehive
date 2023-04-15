import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from './Navbar';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const Layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Head>
        <title>StoreHive</title>
        <meta
          name="description"
          content="StoreHive is the ultimate shopping destination for savvy shoppers looking for a hassle-free experience. Our buzzing hive is home to thousands of products, all carefully curated to meet your every need. From fashion and beauty to home goods and electronics, we've got it all. With StoreHive, shopping has never been easier or more enjoyable. Join the hive today and discover the endless possibilities!"
        />
        <link rel="icon" href="/thirteen.svg" />
      </Head>
      <main
        className={`min-h-screen h-full ${roboto.className} font-serif bg-gray-800 text-white`}
      >
        <Navbar />
        {children}
      </main>
    </>
  );
};
