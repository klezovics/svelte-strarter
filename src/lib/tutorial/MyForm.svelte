<script>
    import {slide, fade} from "svelte/transition";
    let displayInfoMessage = false;
</script>

<form>
    <div class="name-field">
        <label for="name">Name</label>
        <input type="text" name="name">
    </div>
    <div class="surname-field">
        <label for="surname">Surname</label>
        <input type="text" name="surname">
    </div>
    <label>
        <input type="checkbox" bind:checked={displayInfoMessage}/>
        Do you want to give me a million dollars ?
    </label>
</form>

{#if displayInfoMessage}
<!--    Feature -> Can animate elements-->
    <p transition:fade={{duration: 500, delay:500}}>Thank you for your donation !</p>
{/if}

