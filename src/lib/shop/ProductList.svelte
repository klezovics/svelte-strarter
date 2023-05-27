<script>
    import { productStore, cartStore } from './store/stores.js';

    let products;
    productStore.subscribe(value => {
        products = value;
    });

    function addToCart(product) {
        console.log(product, ' added to cart');
        cartStore.update(store => {
            store.push(product);
            return store;
        });
    }

</script>

<div>
    <h1>Welcome to the shop</h1>
    <ul>
        {#each products as product}
            <li >{product.name} - {product.price}
                <button on:click={addToCart(product)}>Add</button>
            </li>
        {/each}
    </ul>
</div>
