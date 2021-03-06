async function handleResponse(generation) {
    const GENERATION = setGenerationObject(generation);
    showCounter();
    disableButton();
    for(let i = GENERATION.first ; i <= GENERATION.last; i++) {
        const pokemon = await getPokemon(i);
        handleShowInDom(pokemon, GENERATION);
    }
    hideCounter();
    enableButton();
}

function setGenerationObject(generation) {
    for(let i in GENERATIONS) {
        if(generation === GENERATIONS[i].generation_number){
            return GENERATIONS[i];
        }
    }
}

async function getPokemon(number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}/`
    const pokemonJson = await fetch(url);
    return pokemonJson.json();
}