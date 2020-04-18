 function handleShowInDom(pokemon, GENERATION) {
    let div = createDiv();
    div.className = isAlolaGeneration(GENERATION);
    div.innerHTML = createInnerHtml(pokemon);
    document.querySelector('#container-pokemon').appendChild(div);
    this.dispatchEvent(new CustomEvent('add-pokemon', {'detail': GENERATION.total}));
}

function createDiv() {
    return document.createElement('div');
}

function createInnerHtml(pokemon) {
    let firstType = getFirstType(pokemon);
    let secondType = getSecondType(pokemon);
    return `
    <a href="#">
    <h4>${pokemon.species.name}</h4>
    <small class="id">#00${pokemon.id}</small>
    <img src='${pokemon.sprites.front_default}'>
    <div class="types" >
        <span class=${firstType}>${firstType}</span>
        <span clasS=${secondType}>${secondType}</span>
    </div>
    </a>
    `
}

function isAlolaGeneration(GENERATION) {
    let pokemonClass = GENERATION.generation_number === 7 ? 'div-pokemon alola': 'div-pokemon';
    return pokemonClass;
}

function getFirstType(pokemon) {
    return pokemon.types[0].type.name;
}

function getSecondType(pokemon) {
    if(pokemon.types.length > 1) {
        return pokemon.types[1].type.name;
    }
    return '';
}