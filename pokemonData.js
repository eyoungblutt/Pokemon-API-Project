 let getPokemonImage = (data) => {
  return data.sprites.front_default;
 }

  let getPokemonName = (data) => {
  return data.name ;
}

 let getPokemonStats = (data) => {
  return data.stats;

  }

   let getPokemonAbilities = (data) => {
    return data.abilities;
    }

    let newPokemonData = (image, pokemonName, abilities, statistics) => {
      image= data.sprites.front_default,
      pokemonName= data.name,
      abilities= data.abilities,
      statistics= data.stats
    };

export { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities, newPokemonData}