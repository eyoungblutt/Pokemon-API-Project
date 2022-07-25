import { displayPokemonImage } from './PokemonImage.js';
import { displayPokemonName } from './pokemonName.js';
import { displayPokemonAbilities } from './pokemonAbilities.js';
import { displayPokemonStats } from './pokemonStats.js';
import { clearFields } from './clearFields.js';

let searchQuery = document.getElementById("search");

document.getElementById('searchButton').addEventListener('click', async () => {

let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`);

if(response.ok === true){
let data = await response.json();

document.getElementById("errorMessage").innerText = "";
displayPokemonImage(data);
displayPokemonName(data);
displayPokemonAbilities(data);
displayPokemonStats(data);

}
else {
  document.getElementById("errorMessage").innerText = "Oops! Please double check your entry is a pokemon name or index number and try again."};

})


let clearAll = document.getElementById("clearAll");
clearAll.addEventListener('click', function () {
  clearFields();
} )




















