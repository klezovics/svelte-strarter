<script>
  import { onMount } from "svelte";
  let characters = []; // Use the Star Wars API, Luke

  // Feature -> Get data on mount
  onMount(async () => {
    const apiResponse = await fetch("https://swapi.dev/api/people/");
    const swPeopleJSON = await apiResponse.json();

    characters = swPeopleJSON.results;

    return () => console.log('Destroyed');
  });
</script>

<ul>
  {#each characters as { name, height, birth_year }}
    <li>
      <strong>{name}</strong>
      (height: {height}cm, birth year: {birth_year})
    </li>
  {:else}
    <p>Loading...</p>
  {/each}
</ul>
