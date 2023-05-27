<script>
    import {counterStore} from './store.js';
    import {v4} from 'node-uuid';
    import Counters from "./Counters.svelte";

    let counters = [];
    counterStore.subscribe(value => {
        counters = value;
    });

    function addCounter() {
        counterStore.update(value => {
            return [...value, {id: v4(), count: 0}];
        });
    }

    function clearCounters() {
        counterStore.update(value => {
            return [];
        });
    }

    function incrementCounter(id) {
        counterStore.update(counters => {
            return counters.map(counter => {
                if (counter.id === id) {
                    return {...counter, count: counter.count + 1};
                }
                return counter;
            });
        });
    }

    function decrementCounter(id) {
        counterStore.update(value => {
            return value.map(counter => {
                if (counter.id === id) {
                    return {...counter, count: counter.count - 1};
                }
                return counter;
            });
        });
    }
</script>

<div>
    <Counters
            counters={counters}
            incrementCounter={incrementCounter}
            decrementCounter={decrementCounter}
            addCounter={addCounter}
            clearCounters={clearCounters}
    />
</div>
