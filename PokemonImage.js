export let displayPokemonImage = (data) => {
 
  let imageSource = data.sprites.front_default;
  let newImage = document.createElement("img"); 
  newImage.setAttribute("src", imageSource);
  newImage.id = "pokemonImage";
  document.getElementById("pokemonCard").appendChild(newImage);
}

