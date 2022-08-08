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

    

export { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities}