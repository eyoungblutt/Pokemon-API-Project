
export let displayPokemonImage = (data) => {
  let imageSource = data.sprites.front_default;
  let newImage = document.createElement("img"); 
  newImage.scr = imageSource;
  document.getElementById("pokemonCard").appendChild(newImage);
  newImage.setAttribute("height", "200px");
  newImage.setAttribute("width", "200px");
}

