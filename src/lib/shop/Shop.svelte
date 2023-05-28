<script>
    import {Router, Link, Route} from 'svelte-routing';
    import ProductList from "./ProductList.svelte";
    import ShoppingCart from "./ShoppingCart.svelte";
    import Checkout from "./Checkout.svelte";

    export let url = "/";
</script>

<main>
    <Router base="/">
        <nav>
            <Link to="/">Product List</Link>
            <Link to="/cart">Shopping Cart</Link>
        </nav>
        <Route path="/" component={ProductList}/>
        <Route path="/cart" component={ShoppingCart}/>
        <Route path="/checkout" component={Checkout}/>
    </Router>
</main>