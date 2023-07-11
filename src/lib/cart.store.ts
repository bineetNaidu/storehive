import type { Product } from '@prisma/client';
import { create } from 'zustand';

type CartItem = {
  quantity: number;
  product: Product;
};

type AddToCartOptions = {
  quantity: number;
  product: Product;
};

interface CartStore {
  cart: CartItem[];
  totalPrice: number;
  totalItems: number;

  addToCart: (options: AddToCartOptions) => void;
  removeFromCart: (productId: number, quantity?: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  emptyCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  totalPrice: 0,
  totalItems: 0,

  addToCart: ({ product, quantity }) => {
    return set((state) => {
      const item = state.cart.find((item) => item.product.id === product.id);
      if (item) {
        return {
          cart: state.cart.map((item) => {
            if (item.product.id === product.id) {
              return {
                ...item,
                quantity: item.quantity + quantity,
              };
            }
            return item;
          }),
          totalPrice: state.totalPrice + product.price * quantity,
          totalItems: state.totalItems + quantity,
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            quantity,
            product,
          },
        ],
        totalPrice: state.totalPrice + product.price * quantity,
        totalItems: state.totalItems + quantity,
      };
    });
  },
  removeFromCart: (productId, quantity) => {
    return set((state) => {
      const item = state.cart.find((item) => item.product.id === productId);
      if (item) {
        if (item.quantity > 1 && quantity) {
          return {
            cart: state.cart.map((item) => {
              if (item.product.id === productId) {
                return {
                  ...item,
                  quantity: item.quantity - quantity,
                };
              }
              return item;
            }),
            totalPrice: state.totalPrice - item.product.price * quantity,
            totalItems: state.totalItems - quantity,
          };
        } else {
          return {
            cart: state.cart.filter((item) => item.product.id !== productId),
            totalPrice: state.totalPrice - item.product.price * item.quantity,
            totalItems: state.totalItems - item.quantity,
          };
        }
      }

      return {
        cart: state.cart,
        totalPrice: state.totalPrice,
        totalItems: state.totalItems,
      };
    });
  },

  emptyCart: () =>
    set((state) => ({
      cart: [],
      totalPrice: 0,
      totalItems: 0,
    })),

  increaseQuantity: (productId) => {
    return set((state) => {
      const item = state.cart.find((item) => item.product.id === productId);
      if (item) {
        return {
          cart: state.cart.map((item) => {
            if (item.product.id === productId) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
          totalPrice: state.totalPrice + item.product.price,
          totalItems: state.totalItems + 1,
        };
      }
      return {
        cart: state.cart,
        totalPrice: state.totalPrice,
        totalItems: state.totalItems,
      };
    });
  },

  decreaseQuantity: (productId) => {
    return set((state) => {
      const item = state.cart.find((item) => item.product.id === productId);
      if (item) {
        if (item.quantity > 1) {
          return {
            cart: state.cart.map((item) => {
              if (item.product.id === productId) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                };
              }
              return item;
            }),
            totalPrice: state.totalPrice - item.product.price,
            totalItems: state.totalItems - 1,
          };
        } else {
          return {
            cart: state.cart.filter((item) => item.product.id !== productId),
            totalPrice: state.totalPrice - item.product.price * item.quantity,
            totalItems: state.totalItems - item.quantity,
          };
        }
      }
      return {
        cart: state.cart,
        totalPrice: state.totalPrice,
        totalItems: state.totalItems,
      };
    });
  },
}));
