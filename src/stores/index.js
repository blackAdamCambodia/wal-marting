import { createPinia } from 'pinia';
import { useCartStore } from './cart.js';

export const pinia = createPinia();

export const setupStore = () => {
  pinia.useStore(useCartStore);
};