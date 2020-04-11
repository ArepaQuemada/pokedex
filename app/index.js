//Handle api response
function handleResponse(generation) {
    console.log('consumiendo API');
    const url = `https://pokeapi.co/api/v2/generation/${generation}/`
    //gets data from generation
    fetch(url)
    .then(response => response.json())
    .then((generation) => {
        generation.pokemon_species.forEach(pokemonUrl => {
            //gets pokemon species
            fetch(pokemonUrl.url)
            .then(response => response.json())
            .then((pokemons) => {
                //gets pokemon
                fetch(pokemons.varieties[0].pokemon.url)
                .then(response => response.json())
                .then((pokemon) => {
                    const sprite = pokemon.sprites.front_default;
                    const title = pokemon.species.name;
                    const id = pokemon.id;
                    const firstType = pokemon.types[0].type.name;
                    const secondType = pokemon.types.length > 1 ? pokemon.types[1].type.name : '';
                    const div = document.createElement('div');
                    div.className = 'div-pokemon';
                    div.innerHTML = `
                        <h4>${title}<h4>
                        <small class="id">#00${id}</small>
                        <img src='${sprite}'>
                        <div class="types">
                            <span class=${firstType.toLowerCase()}>${firstType}</span>
                            <span clasS=${secondType.toLowerCase()}>${secondType}</span>
                        </div>
                    `
                    document.querySelector('#container-pokemon').appendChild(div);
                })
            })
        });
    })
}    