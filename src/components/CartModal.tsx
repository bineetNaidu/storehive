import { FC } from 'react';
import { Button } from './Button';
import { useCartStore } from '@/lib/cart.store';
import Image from 'next/image';

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const CartModal: FC<Props> = ({ isOpen, toggle }) => {
  const { cart, emtpyCart, removeFromCart, totalItems, totalPrice } =
    useCartStore();

  return (
    <div
      className={`modal modal-bottom sm:modal-middle
			${isOpen && 'modal-open'}`}
    >
      <div className="modal-box bg-brand-secondary text-white">
        <h3 className="font-bold text-lg">Your Cart!</h3>
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
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.product.price}</p>
              </div>

              <div>
                <Button
                  size="sm"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  Remove Item
                </Button>
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
              <div className="divider"></div>
              <div>
                <p className="text-center">Total: ${totalPrice}</p>
                <p className="text-center">Total Items: {totalItems}</p>
              </div>
            </>
          )}
        </div>
        <div className="modal-action">
          {cart.length > 0 && (
            <Button size="md" onClick={emtpyCart}>
              Empty Cart
            </Button>
          )}

          <Button disabled={totalItems === 0}>Process to Checkout</Button>

          <Button size="md" onClick={toggle}>
            Close!
          </Button>
        </div>
      </div>
    </div>
  );
};
