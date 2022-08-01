export let displayPokemonName = (pokemonDetails) => {
  
  let newHeading = document.createElement("h3");
  newHeading.className = "pokemonName";
  newHeading.innerText = "Name: ";
  
  let nameInformation = document.createElement("p");
  nameInformation.innerText = pokemonDetails;
  nameInformation.className = "nameInformation";
  document.getElementById("pokemonCard").appendChild(newHeading);
  document.getElementById("pokemonCard").appendChild(nameInformation);
}