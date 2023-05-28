<script>
    import {storeProxy}  from "./StoreProxy.js";
    import CounterSummary from "./CounterSummary.svelte";
    import _ from 'lodash';

    let counters = [];
    let totalCount = 0;

    storeProxy.subscribe(value => {
            counters = value;
            let values = counters.map(counter => counter.count);
            totalCount = _.sum(values);
        }
    );
</script>

<div>
    <CounterSummary totalCount={totalCount}/>
</div>