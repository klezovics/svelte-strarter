<script>
    export let counters;
    export let addCounter;
    export let clearCounters;
    export let incrementCounter;
    export let decrementCounter;
</script>

<div>
    <h1>Counters</h1>
    <ul>
        {#each counters as counter}
            <li>
                <span>{counter.count}</span>
                <button on:click={() => incrementCounter(counter.id)}>+</button>
                <button on:click={() => decrementCounter(counter.id)}>-</button>
            </li>
        {/each}
    </ul>
    <button on:click={addCounter}>Add counter</button>
    <button on:click={clearCounters}>Clear counters</button>
</div>
