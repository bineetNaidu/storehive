'use client';

import { GetProductByIdResponse } from '@/app/api/products/[product_id]/route';
import { Button } from '@/components/Button';
import { useCartStore } from '@/lib/cart.store';
import { type Size } from '@prisma/client';
import { FC, useState, useCallback } from 'react';
import chroma from 'chroma-js';

type Props = {
  product: NonNullable<GetProductByIdResponse['result']>;
};

export const ProductCtx: FC<Props> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);

  const [quantity, setQuantity] = useState(1);

  const increment = useCallback(
    () => quantity < product.stockCount && setQuantity((q) => q + 1),
    [quantity, product.stockCount]
  );
  const decrement = useCallback(
    () => quantity > 1 && setQuantity((q) => q - 1),
    [quantity]
  );

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = useCallback(() => {
    addToCart({ product, quantity });
  }, [addToCart, product, quantity]);

  return (
    <div className="px-10 md:px-0">
      {product.variations.map((variation) =>
        variation.type === 'COLOR' ? (
          <div key={variation.id} className="mb-5">
            <h2 className="text-xl font-bold mb-1">Choose the Color</h2>
            <div className="flex gap-4">
              {variation.options.map((color) => (
                <div
                  key={color.id}
                  className="tooltip tooltip-bottom"
                  data-tip={color.name}
                >
                  <button
                    onClick={() => setSelectedColor(color.name!)}
                    className={`w-8 h-8 rounded-full border-2 mr-2 hover:ring-2 ring-offset-2 ring-offset-white focus:outline-none
										ring-slate-600 ring-opacity-50
										transform hover:scale-110 transition duration-300 ease-in-out
									${
                    selectedColor === color.name
                      ? 'ring-2 ring-offset-2 ring-offset-white ring-slate-600 ring-opacity-50'
                      : ''
                  }`}
                    style={{
                      background: `radial-gradient(circle, ${chroma(color.hex!)
                        .darken()
                        .hex()} 0%, ${chroma(color.hex!)
                        .brighten(2)
                        .hex()} 100%)`,
                    }}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          variation.type === 'SIZE' && (
            <div key={variation.id}>
              <h2 className="text-xl font-bold mb-1">Choose the Size</h2>
              <div className="flex gap-4">
                {variation.options.map((opt) => (
                  <div
                    key={opt.id}
                    className="tooltip tooltip-bottom"
                    data-tip={opt.name}
                  >
                    <button
                      className={`w-8 h-8 rounded-full border-2 mr-2 hover:ring-2 ring-offset-2 ring-offset-white focus:outline-none
										ring-slate-600 ring-opacity-50
										transform hover:scale-110 transition duration-300 ease-in-out
										${
                      selectedSize === opt.size
                        ? 'ring-2 ring-offset-2 ring-offset-white ring-slate-600 ring-opacity-50'
                        : ''
                    }
									`}
                      onClick={() => setSelectedSize(opt.size!)}
                    >
                      {opt.size!}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )
        )
      )}

      <div className="divider"></div>

      <div className="flex items-center mb-4">
        <div className="join lg:join-horizontal items-center border bg-gray-200 rounded-xl p-1">
          <div
            className={`join-item ${quantity === 1 && 'cursor-not-allowed'}`}
          >
            <Button
              varient="ghost"
              onClick={decrement}
              disabled={quantity === 1}
            >
              -
            </Button>
          </div>
          <div className="join-item px-5">{quantity}</div>
          <div
            className={`join-item ${
              quantity === product.stockCount &&
              'tooltip tooltip-right tooltip-warning cursor-not-allowed'
            }`}
            data-tip="This is the maximum quantity available"
          >
            <Button
              varient="ghost"
              onClick={increment}
              disabled={quantity === product.stockCount}
            >
              +
            </Button>
          </div>
        </div>

        {product.stockCount < 20 && (
          <div className="text-xs ml-4">
            <p>
              Only{' '}
              <span className="text-green-500 font-bold">
                {product.stockCount} items
              </span>{' '}
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
        <Button
          size="lg"
          varient="outlined"
          className="ml-4 rounded-xl"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};
