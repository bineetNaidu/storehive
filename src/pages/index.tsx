import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <Link href="/login">
        <button>Login</button>
      </Link>
    </main>
  );
};

export default HomePage;
