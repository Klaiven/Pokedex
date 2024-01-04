
function convertPokemonToLi(pokemon){
    return `
                <li class="pokemon">

                    <div class="cabecalho">
                        <span class="name">${pokemon.name}</span>
                        <span class="number">#001</span>
                    </div>

                    <div class="detail">
                        <ol class="types">
                            <li class="type">grass</li>
                            <li class="type">poison</li>
                        </ol>
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="${pokemon.name}">
                    </div>

                </li>
    `
}

const pokemonList = document.getElementById('lista-pokemons')


pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})



