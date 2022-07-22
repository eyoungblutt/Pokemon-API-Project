export let displayPokemonName = (data) => {
  let pokemonName = data.name;
  let newHeading = document.createElement("h3");
  newHeading.innerHTML = ` Name : ${pokemonName}`;
document.getElementById("pokemonCard").appendChild(newHeading);
}

