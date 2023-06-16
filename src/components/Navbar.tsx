import Link from 'next/link';
import { FC } from 'react';
import { Button } from './Button';
import { NavAuthCtx } from './NavAuthCtx';
import type { Category, Product } from '@prisma/client';

type Props = {};

type Result = {
  count: number;
  result: (Category & {
    products: (
      | Product
      | (Product & {
          categories: {
            id: number;
            name: string;
          }[];
        })
    )[];
  })[];
};

const fetchCategories = async () => {
  const res = await fetch('http://localhost:3000/api/categories?limit=10');
  if (!res.ok) {
    return [];
  }

  const data: Result = await res.json();

  return data.result;
};

export const Navbar: FC<Props> = async () => {
  const categories = await fetchCategories();

  return (
    <nav className="navbar flex justify-between py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box min-w-fit bg-brand-secondary text-brand-primary z-50"
          >
            <li>
              <Link href="/new-arrivals">New Arrivals</Link>
            </li>
            <li>
              <span>Shop By Category</span>
              <ul className="p-2">
                {categories.map((c) => (
                  <li key={c.id}>
                    <Link href={`/categories/${c.id}`}>{c.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/deals">Deals</Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
            StoreHive
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <Link href="/new-arrivals">
            <Button varient="ghost">New Arrivals</Button>
          </Link>
          <li tabIndex={0}>
            <details>
              <summary className="text-brand-font-color font-medium bg-transparent hover:bg-[#7e9a7e] hover:text-white">
                Shop by Category
              </summary>
              <ul
                className="p-2 text-white z-50"
                style={{ background: '#7e9a7e' }}
              >
                {categories.map((c) => (
                  <li key={c.id}>
                    <Link href={`/categories/${c.id}`}>{c.name}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <Link href="/deals">
            <Button varient="ghost">Deals</Button>
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <NavAuthCtx />
      </div>
    </nav>
  );
};
