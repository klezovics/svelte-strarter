<script>

    let character = null;

    async function getRandomStarWarsCharacter() {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const apiResponse = await fetch(
            `https://swapi.dev/api/people/${randomNumber}/`
        );

        return await apiResponse.json();
    }

    let promise = getRandomStarWarsCharacter();
</script>


<h1>This is character info!</h1>

<!--Feature: Can use await to wait for a promise to resolve-->
{#await promise}
    <h1>Loading ...</h1>
{:then character}
    <h1>{character.name}</h1>
{/await}
