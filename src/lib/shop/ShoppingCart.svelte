<script>
    import {cartStore} from './store/stores.js';
    import {Link} from "svelte-routing";

    let cartItems;
    let totalCartPrice = 0;

    cartStore.subscribe(value => {
        cartItems = value;
        totalCartPrice = cartItems.map(item => item.price)
            .reduce((prev, next) => prev + next, 0);
    });

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
    <h1>Shopping cart</h1>
    <h2>Total price: {totalCartPrice}</h2>
    <Link to="/checkout">
        <button>Pay and checkout</button>
    </Link>

    <button on:click={clearCart}>Clear cart</button>
    {#each cartItems as item}
        <div>
            <p>{item.name} - {item.price}</p>
        </div>
    {/each}
</div>