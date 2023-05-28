<script>
    let name;

    function handleClick() {
        alert("Hello " + name);
    }

    function handleInput(event) {
        name = event.target.value;
    }
</script>

<h1>Introduce yourself:</h1>
<!--// Feature -> Handle inputs-->
<input type="text" on:change={handleInput} />
<button on:click|preventDefault|once={handleClick}>Click me</button>
