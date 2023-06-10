'use client';

import { Button } from '@/components/Button';
import { FC, useState, useMemo } from 'react';

export const ProductCtx: FC = () => {
  const inStock = 12;

  const [selectedColor, setSelectedColor] = useState('red');
  const [quantity, setQuantity] = useState(1);

  const increment = useMemo(
    () => () => quantity < inStock && setQuantity((q) => q + 1),
    [quantity]
  );
  const decrement = useMemo(
    () => () => quantity > 1 && setQuantity((q) => q - 1),
    [quantity]
  );

  const [selectedSize, setSelectedSize] = useState('sm');

  return (
    <div className="px-10 md:px-0">
      <div>
        <h2 className="text-xl font-bold mb-1">Choose the Color</h2>
        <div className="flex">
          {['red', 'blue', 'green'].map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 mr-2 hover:ring-2 ring-offset-2 ring-offset-white focus:outline-none
									ring-slate-600 ring-opacity-50
									transform hover:scale-110 transition duration-300 ease-in-out
									${
                    selectedColor === color
                      ? 'ring-2 ring-offset-2 ring-offset-white ring-slate-600 ring-opacity-50'
                      : ''
                  }
									${
                    color === 'red'
                      ? 'bg-gradient-to-b from-red-500 to-red-300'
                      : color === 'blue'
                      ? 'bg-gradient-to-b from-blue-500 to-blue-300'
                      : 'bg-gradient-to-b from-green-500 to-green-300'
                  }
									`}
            ></button>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex items-center mb-4">
        <div className="join lg:join-horizontal items-center border bg-gray-200 rounded-xl p-1">
          <div className="join-item">
            <Button varient="ghost" onClick={decrement}>
              -
            </Button>
          </div>
          <div className="join-item px-5">{quantity}</div>
          <div className="join-item">
            <Button varient="ghost" onClick={increment}>
              +
            </Button>
          </div>
        </div>

        {inStock < 20 && (
          <div className="text-xs ml-4">
            <p>
              Only{' '}
              <span className="text-green-500 font-bold">{inStock} items</span>{' '}
              left
            </p>
            <p>Dont miss it!</p>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <Button size="lg" className="rounded-xl">
          Buy it
        </Button>
        <Button size="lg" varient="outlined" className="ml-4 rounded-xl">
          Add to cart
        </Button>
      </div>
    </div>
  );
};
