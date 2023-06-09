import Link from 'next/link';
import { FC } from 'react';
import { Button } from './Button';
import { NavAuthCtx } from './NavAuthCtx';

type Props = {};

export const Navbar: FC<Props> = () => {
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-brand-secondary text-brand-primary"
          >
            <li>
              <Link href="/new-arrivals">New Arrivals</Link>
            </li>
            <li>
              <Link href="/categories">Category</Link>
              <ul className="p-2">
                <li>
                  <Link href="/categories/electronics">Electronics</Link>
                </li>
                <li>
                  <Link href="/categories/fashion">Fashion</Link>
                </li>
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
              <ul className="p-2 text-white" style={{ background: '#7e9a7e' }}>
                <li>
                  <Link href="/categories/electronics">Electronics</Link>
                </li>
                <li>
                  <Link href="/categories/fashion">Fashion</Link>
                </li>
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
