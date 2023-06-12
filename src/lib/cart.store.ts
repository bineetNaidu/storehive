import { type Product, type OrderItem } from '@prisma/client';
import { create } from 'zustand';

interface CartStore {
  cart: {
    quantity: number;
    product: Product;
  }[];
  totalPrice: number;
  totalItems: number;

  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  emtpyCart: () => void;
}

export const useCartStore = create<CartStore>()((set) => ({
  cart: [],
  totalPrice: 0,
  totalItems: 0,

  addToCart: (product, quantity) => {
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cart.push({
          product,
          quantity,
        });
      }

      state.totalItems += quantity;
      state.totalPrice += product.price * quantity;

      return state;
    });
  },

  removeFromCart: (productId) => {
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.product.id === productId
      );

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.cart = state.cart.filter(
            (item) => item.product.id !== productId
          );
        } else {
          existingProduct.quantity -= 1;
        }

        state.totalItems -= 1;
        state.totalPrice -= existingProduct.product.price;
      }

      return state;
    });
  },

  emtpyCart: () => {
    set((state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.totalItems = 0;
      return state;
    });
  },
}));
