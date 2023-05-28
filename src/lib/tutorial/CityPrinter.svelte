<script>
    let cities = [
        {id:1, name: 'London'},
        {id:2, name: 'Paris'},
        {id:3, name: 'New York'},
    ]
</script>

<h1>This is a city list</h1>
<ul>
<!--    Feature -> Can iterate over array when rendering. Also can get index-->
    {#each cities as city,index (city.id)}
        <li>{index} - {city.name}</li>
    {/each}
</ul>