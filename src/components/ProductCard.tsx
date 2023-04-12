import type { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  product: Product;
};

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <article className="h-fit flex flex-col justify-between p-4 border border-gray-200 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:border-gray-300">
      <Link href={`/product/${product.id}`}>
        <div className="flex-auto ">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={300}
          />
        </div>
      </Link>

      <div className="flex-auto pt-4">
        <div className="flex justify-between">
          <h2 className="font-bold">{product.name}</h2>
          <p>${product.price}</p>
        </div>

        <button
          className="
						w-full mt-4 py-2 text-white bg-orange-500 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-orange-200 focus:ring-offset-opacity-50"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};
