export let displayPokemonName = (data) => {
  let pokemonName = data.name;
  let newHeading = document.createElement("h3");
  newHeading.id = "pokemonName";
  newHeading.innerHTML = "Name : ";
  
  
  let nameInformation = document.createElement("p");
  nameInformation.innerHTML = pokemonName;
  nameInformation.id = "nameInformation";
document.getElementById("pokemonCard").appendChild(newHeading);
document.getElementById("pokemonCard").appendChild(nameInformation);
}

