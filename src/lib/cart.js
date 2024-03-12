import { writable } from 'svelte/store';


function getCart() {
    if (typeof window !== 'undefined') {
        const cartStore = localStorage.getItem('cart');
        if (cartStore) {
            return JSON.parse(cartStore);
        }
    }
    return [];
}
const cart = writable(getCart());

if (typeof window !== 'undefined') {
    cart.subscribe((currentCart) => {
        localStorage.setItem('cart', JSON.stringify(currentCart));
    });
}
export { cart };