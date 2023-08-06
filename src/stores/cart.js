import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    products: [],
  }),
  getters: {
    cartTotal() {
      return this.products.reduce((total, product) => total + product.price, 0);
    },
  },
  actions: {
    addToCart(product) {
      this.products.push(product);
    },
    removeFromCart(product) {
      const index = this.products.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    },
  },
});