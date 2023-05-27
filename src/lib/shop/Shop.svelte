<script>
    import {Router, Link, Route} from 'svelte-routing';
    import ProductList from "./ProductList.svelte";
    import ShoppingCart from "./ShoppingCart.svelte";
    import Navbar from "./nav/Navbar.svelte";

    export let url = "/";
</script>

<main>
    <Router base="/">
        <Navbar/>
        <Route path="/" component={ProductList}/>
        <Route path="/cart" component={ShoppingCart}/>
    </Router>
</main>