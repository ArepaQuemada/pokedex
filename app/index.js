async function handleResponse(generation) {
    showCounter();
    const url = `https://pokeapi.co/api/v2/generation/${generation}/`
    const generationJson = await getGeneration(url);
    
    let event = new CustomEvent('add-pokemon', {'detail': generationJson.pokemon_species});

    for(element of generationJson.pokemon_species) {
        let pokemon = await getPokemon(element.url);
        showInDom(pokemon, event);
    }
}

function showCounter() {
    document.querySelector('#counter').style.display = 'block';
}

async function getGeneration (url) {
    const response = await fetch(url);
    return response.json();
}

async function getPokemon(url) {
    const newUrl = url.replace('pokemon-species', 'pokemon')
    const response = await fetch(newUrl);
    return response.json();
}

function showInDom(pokemon, event) {
    let sprite = pokemon.sprites.front_default;
    let title = pokemon.species.name;
    let id = pokemon.id;
    let firstType = pokemon.types[0].type.name;
    let secondType = pokemon.types.length > 1 ? pokemon.types[1].type.name : '';
    let div = document.createElement('div');
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
    this.dispatchEvent(event);
}
