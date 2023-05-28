<script>
    import svelteLogo from './assets/svelte.svg'
    import viteLogo from '/vite.svg'
    import Counter from './lib/Counter.svelte'
    import MyComponent from "./lib/MyComponent.svelte";
    import ProductList from "./lib/shop/ProductList.svelte";
    import Shop from "./lib/shop/Shop.svelte";
    import Counters from "./lib/counters/Counters.svelte";
    import CounterApp from "./lib/counters/CounterApp.svelte";
    import StarWarsApp from "./lib/starwars/StarWarsApp.svelte";
    import TicTakToeApp from "./lib/tiktactoe/TicTakToeApp.svelte";
</script>

<div>
    <TicTakToeApp/>
</div>

<style>
    /*.logo {*/
    /*  height: 6em;*/
    /*  padding: 1.5em;*/
    /*  will-change: filter;*/
    /*  transition: filter 300ms;*/
    /*}*/
    /*.logo:hover {*/
    /*  filter: drop-shadow(0 0 2em #646cffaa);*/
    /*}*/
    /*.logo.svelte:hover {*/
    /*  filter: drop-shadow(0 0 2em #ff3e00aa);*/
    /*}*/
    /*.read-the-docs {*/
    /*  color: #888;*/
    /*}*/
</style>
