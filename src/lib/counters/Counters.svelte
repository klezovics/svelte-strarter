<script>
    import {counterStore} from './store.js';
    import {v4} from 'node-uuid';

    let counters = [];
    counterStore.subscribe(value => {
            counters = value;
        }
    )


    function addCounter() {
        counterStore.update(value => {
            return [...value, {id: v4(), value: 0}]
        })
    }

    function removeCounter(id) {
        counters = counters.filter(counter => counter.id !== id);
    }

    function clearCounters() {
        counterStore.update(value => {
            return [];
        })
    }
</script>

<div>
    <h1>Counters</h1>
    <ul>
        {#each counters as counter}
            <li>{counter.value}</li>
        {/each}
    </ul>
    <button on:click={addCounter}>Add counter</button>
    <button on:click={clearCounters}>Clear counters</button>
</div>