 function showInDom(pokemon, GENERATION) {
    let sprite = pokemon.sprites.front_default;
    let title = pokemon.species.name;
    let id = pokemon.id;
    let firstType = pokemon.types[0].type.name;
    let secondType = pokemon.types.length > 1 ? pokemon.types[1].type.name : '';
    let div = document.createElement('div');
    div.className = isAlolaGeneration(GENERATION);
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
    this.dispatchEvent(new CustomEvent('add-pokemon', {'detail': GENERATION.total}));
}

function isAlolaGeneration(GENERATION) {
    let pokemonClass = GENERATION.generation_number === 7 ? 'div-pokemon alola': 'div-pokemon';
    return pokemonClass;
}
