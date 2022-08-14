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


    let newPokemonData = (data) => {
      let newPokemonData = {
        image: data.sprites.front_default,
      pokemonName: data.name,
      abilities: data.abilities,
      statistics: data.stats
    };
    return newPokemonData;
  }
  

export { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities, newPokemonData }