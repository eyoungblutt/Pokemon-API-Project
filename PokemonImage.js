
export let displayPokemonImage = (data) => {
  let pokemonImage = data.sprites.front_default;
  let pokemonImageDisplay = document.getElementById("pokemonImage").src = pokemonImage;

  return pokemonImageDisplay;
}

