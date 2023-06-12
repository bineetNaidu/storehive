'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC, useState, useCallback } from 'react';
import { Button } from './Button';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSession, signOut } from 'next-auth/react';
import { CartModal } from './CartModal';
import { useCartStore } from '@/lib/cart.store';

export const NavAuthCtx: FC = () => {
  const { status, data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  if (status === 'authenticated' && session) {
    return (
      <div className="flex items-center justify-center gap-2">
        <button
          className="btn btn-square min-w-fit btn-ghost text-brand-font-color"
          onClick={toggle}
        >
          <div className="indicator">
            {cart.length > 0 && (
              <span className="indicator-item badge badge-xs badge-info"></span>
            )}
            <AiOutlineShoppingCart className="text-2xl" />
          </div>
        </button>
        <CartModal isOpen={isOpen} toggle={toggle} />
        <div className="dropdown dropdown-end">
          <button>
            <div className="avatar">
              <div className="w-10 rounded-full hover:ring hover:ring-brand-secondary hover:ring-offset-transparent hover:ring-offset-1">
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </button>
          <ul
            tabIndex={100}
            className="menu dropdown-content p-2 shadow bg-brand-secondary text-white rounded-box w-52 mt-4"
          >
            <li>
              <span className="text-sm font-semibold text-gray-400">
                Logged as {session.user.name}
              </span>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/your-reviews">Your reviews</Link>
            </li>
            <li>
              <Link href="/your-orders">Your orders</Link>
            </li>
            <li>
              <Link href="/sell-product">List your product</Link>
            </li>
            <li>
              <a onClick={() => signOut()}>Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  if (status === 'loading') {
    return (
      <Button size="lg" varient="outlined">
        <span className="loading loading-spinner"></span>
      </Button>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <Link href="/signin">
        <Button size="lg" varient="outlined">
          Sign in
        </Button>
      </Link>
    );
  }
};
