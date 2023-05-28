<script>
    let count = 0;

    // Feature -> Can use reactive variables which update
    // S1: Define reactive variables
    let squared;
    let squaredMinusOne;

    // S2: Update them in a reactive block
    $: {
        squared = count * count;
        squaredMinusOne = squared - 1;
    }
    let handleClick = () => {
        count += 1;
    }

</script>

<button on:click={handleClick}>Counter {count}</button>
<h1>Squared {squared} </h1>
<h1>Squared minus one {squaredMinusOne} </h1>

