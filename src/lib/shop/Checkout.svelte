<script>
    import { cartStore } from './store/stores.js';
    import Navbar from "./nav/Navbar.svelte";

    let cartItems;
    cartStore.subscribe(value => {
        cartItems = value;
    });

    let totalCartPrice = 0;
    cartItems.forEach(item => {
        totalCartPrice += item.price;
    });

    function clearCart() {
        cartStore.update(items => {
            return [];
        });
    }
</script>


<div>
    <h1>Thank you for buying!</h1>
</div>