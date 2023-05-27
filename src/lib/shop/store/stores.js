import { writable } from 'svelte/store';

// Create a writable store
export const productStore = writable([
    { name: 'Shirt', price: 10 },
    { name: 'Dress', price: 20 },
]);

export const cartStore = writable([]);
