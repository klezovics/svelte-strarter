<script>
    let stringToRender = '<strong>Powerful text</strong>';
</script>

<!--// Feature 8 -> Can bind inputs to variables and use them later-->
<textarea bind:value={stringToRender} placeholder="Enter something ..."/>

<!--// Feature 9 -> Can render HTML-->
<div>{@html stringToRender}</div>


<style>
    textarea {
        width: 100%;
        height: 12rem;
    }
</style>