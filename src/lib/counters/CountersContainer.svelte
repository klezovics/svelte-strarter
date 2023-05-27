<script>
    import {counterStore} from './store.js';
    import {v4} from 'node-uuid';
    import Counters from "./Counters.svelte";
    import {storeProxy} from "./StoreProxy.js";


    let counters = [];
    storeProxy.subscribe(value => {
        counters = value;
    });

</script>

<div>
    <Counters
            counters={counters}
            incrementCounter={storeProxy.incrementCounter}
            decrementCounter={storeProxy.decrementCounter}
            addCounter={storeProxy.addCounter}
            clearCounters={storeProxy.clearCounters}
    />
</div>
