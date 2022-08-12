import { displayPokemonImage } from "./displayPokemon.js";

// export let createElementOne = () => {
//   let newElement = document.createElement("div");
//   newElement.innerText = displayPokemonImage(pokemonDetails);
//   return newElement;
  
// }
 let createElementTwo = ( displayPokemonImage) => {
  let data = document.createElement("div");
 data.innerText = displayPokemonImage;
  return data;
};

   let createElementThree = () => {
    return document.createElement("div");
    
  }

   let createElementFour = () => {
    return document.createElement("div");
    
  }

  export { createElementFour, createElementThree, createElementTwo };