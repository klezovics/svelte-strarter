<script>
    // Feature 4 -> Can define component props and pass data into them
    export let text = "base"
</script>

<div>
    {text}
    <!--    // Feature 5 -> Can define component slots and pass data into them-->
    <!--    // Slots are like the children prop in React-->
    <slot>
<!--        // Feature 6 -> Can define default slot content-->
        <p>This is empty placeholder, in case no children!</p>
    </slot>
</div>

<style>
    div {
        background-color: red;
        color: white;
    }
</style>