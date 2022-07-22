export let displayPokemonName = (data) => {
  let pokemonName = data.name;
  let pokemonNameDisplay = document.getElementById("pokemonName").innerText = `Name: ${pokemonName}`;
return pokemonNameDisplay;
}