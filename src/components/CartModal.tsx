import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import { FC } from 'react';
import { Button } from './Button';
import { useCartStore } from '@/lib/cart.store';

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const CartModal: FC<Props> = ({ isOpen, toggle }) => {
  const {
    cart,
    emptyCart,
    removeFromCart,
    totalItems,
    totalPrice,
    decreaseQuantity,
    increaseQuantity,
  } = useCartStore();

  return (
    <div
      className={`modal modal-bottom sm:modal-middle
			${isOpen && 'modal-open'}`}
    >
      <div className="modal-box bg-brand-secondary text-white">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Your Cart!</h3>
          <Button size="sm" onClick={toggle} aria-label="Close!">
            <span aria-hidden="true">&times;</span>
          </Button>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col ml-2 gap-2">
          {cart.map((item) => (
            <div key={item.product.id} className="flex gap-2 items-center">
              <div>
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  width={80}
                  height={80}
                  className="h-auto w-full"
                />
              </div>

              <div>
                <h4>{item.product.name}</h4>
                <p className="flex">
                  Quantity:
                  <div className="flex ml-2">
                    <div
                      className={`join-item ${
                        item.quantity === item.product.stockCount &&
                        'tooltip tooltip-top tooltip-warning cursor-not-allowed'
                      }`}
                      data-tip="This is the maximum quantity available"
                    >
                      <Button
                        size="sm"
                        onClick={() => increaseQuantity(item.product.id)}
                        disabled={item.quantity === item.product.stockCount}
                      >
                        +
                      </Button>
                    </div>
                    <span className="mx-1">{item.quantity}</span>
                    <Button
                      size="sm"
                      onClick={() => decreaseQuantity(item.product.id)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </Button>
                  </div>
                </p>
                <p>Price: ${item.product.price}</p>
                <div>
                  <Button
                    size="sm"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <FaTrash /> <span className="ml-1">Remove this item</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {cart.length === 0 && (
            <div className="flex flex-col items-center">
              <p className="text-center">Your cart is looks empty! Oops!</p>
              <Image
                src="/images/empty-cart.png"
                alt="Empty Cart"
                width={200}
                height={200}
              />
            </div>
          )}

          {cart.length > 0 && (
            <>
              <div className="divider mb-1"></div>
              <div className="flex justify-end">
                <p className="text-center">Total Items: {totalItems}</p>
                <div className="divider divider-horizontal p-0 m-0"></div>
                <p className="text-center">
                  Total:{' '}
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                </p>
              </div>
            </>
          )}
        </div>
        <div className="modal-action items-center">
          {cart.length > 0 && (
            <Button size="sm" onClick={emptyCart}>
              Empty Cart
            </Button>
          )}

          <Button disabled={totalItems === 0}>Process to Checkout</Button>
        </div>
      </div>
    </div>
  );
};
