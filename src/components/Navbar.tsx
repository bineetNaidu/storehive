import Link from 'next/link';
import { FC } from 'react';
import { ShoppingCart, User } from 'react-feather';

type ButtonProps = {
  tittle: string;
  icon?: React.ReactNode;
};

const Button: FC<ButtonProps> = ({ tittle, icon }) => {
  return (
    <button className="flex px-3 py-1 transition-all hover:underline">
      <span>{!!icon && icon}</span>
      <span className="ml-2">{tittle}</span>
    </button>
  );
};

export const Navbar: FC = () => {
  return (
    <nav className="flex justify-between mx-auto px-5">
      <div className="">
        <Link href="/">
          <h1 className="text-2xl font-bold text-orange-500">StoreHive</h1>
        </Link>
      </div>

      <div className="flex justify-evenly w-full">
        <Button tittle="Categories" />
        <Button tittle="Deals" />
        <Button tittle="What" />
        <input
          type="text"
          className="border border-transparent hover:border-orange-950 rounded px-3 py-1 transition-all"
        />
        <Button tittle="My Account" icon={<User />} />
        <Button tittle="Cart" icon={<ShoppingCart />} />
      </div>
    </nav>
  );
};
