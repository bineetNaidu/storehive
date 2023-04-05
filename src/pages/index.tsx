import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <>
      <h1 className="text-lg">Home</h1>
      <Link href="/login">
        <button>Login</button>
      </Link>
    </>
  );
};

export default HomePage;
