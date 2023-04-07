import Link from 'next/link';
import { FC } from 'react';
import { ShoppingCart, User } from 'react-feather';

type ButtonProps = {
  tittle: string;
  icon?: React.ReactNode;
};

const Button: FC<ButtonProps> = ({ tittle, icon }) => {
  return (
    <button className="flex items-center justify-center text-gray-700 hover:text-orange-500 transition-all text-sm font-semibold">
      {!!icon && <span>{icon}</span>}
      <span className="ml-2">{tittle}</span>
    </button>
  );
};

export const Navbar: FC = () => {
  return (
    <nav className="flex justify-between mx-auto px-8 py-4">
      <div className="">
        <Link href="/">
          <h1 className="text-2xl font-bold text-orange-500">StoreHive</h1>
        </Link>
      </div>

      <div className="flex justify-evenly w-full">
        <Button tittle="Categories" />
        <Button tittle="Deals" />
        <Button tittle="What's New" />
        <input
          placeholder="Search"
          type="text"
          className="border border-orange-400 border-transparent hover:border-orange-700 rounded-xl px-3 py-1 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-orange-200 focus:ring-offset-opacity-50
					"
        />
        <Button tittle="My Account" icon={<User />} />
        <Button tittle="Cart" icon={<ShoppingCart />} />
      </div>
    </nav>
  );
};
