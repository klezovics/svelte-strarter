<script>
    let characters = [];
    let characterCount = 0;
    let characterFilms = [];

    const setFilms = (filmUrls) => {
        fetchFilmsFromUrls(filmUrls)
    }

    async function fetchFilmsFromUrls(filmUrls) {
        try {
            let films = [];

            for (let i = 0; i < filmUrls.length; i++) {
                const response = await fetch(filmUrls[i]);
                const data = await response.json();
                films.push(data.title)
            }

            characterFilms = films
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchCharacters() {
        try {
            let allCharacters = [];

            const response = await fetch('https://swapi.dev/api/people/');
            const data = await response.json();
            const results = data.results;

            allCharacters = allCharacters.concat(data.results)
            // let next = data.next
            // while(next !== null) {
            //     const response = await fetch(next);
            //     const data = await response.json();
            //     next = data.next
            //     allCharacters = allCharacters.concat(data.results)
            // }

            characters = allCharacters
            characterCount = allCharacters.length
        } catch (error) {
            console.error(error);
        }
    }

    fetchCharacters();
</script>

<div>
    <h1>Star Wars Characters</h1>
    <h2>Character count from API: {characterCount}</h2>
    <ul>
        {#each characters as character (character.name)}
            <li on:click={() => setFilms(character.films)}>{character.name}</li>
        {/each}
    </ul>
    <div>
        <h1>Character fields:</h1>
        {#each characterFilms as film}
            <li>{film}</li>
        {/each}
    </div>
</div>

<style>
    li {
        cursor: pointer;
    }

    li:hover {
        color: blue;
    }
</style>
