export let displayPokemonImage = (pokemonDetails) => {
  let newImage = document.createElement("img"); 
  newImage.setAttribute("src", pokemonDetails);
  newImage.className = "pokemonImage";
  document.getElementById("pokemonCard").appendChild(newImage);
}