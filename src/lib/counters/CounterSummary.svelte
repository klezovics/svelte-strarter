<script>
    import {counterStore} from './store.js';

    const sum = (arr) => {
        let sum = 0;

        if (arr) {
            arr.forEach((item) => {
                sum += item;
            });
        }

        return sum;
    }

    let counters = [];
    let totalCount = 0;

    counterStore.subscribe(value => {
            counters = value;
            console.log('Counters:', counters);
            let values = counters.map((counter) => (counter.count));
            console.log('Values:', values)
            totalCount = sum(values);
        }
    );
</script>

<div>
    <h1>Total count {totalCount}</h1>
</div>