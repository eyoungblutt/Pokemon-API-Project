import { displayPokemonImage } from './PokemonImage.js';
import { displayPokemonName } from './pokemonName.js';
import { displayPokemonAbilities } from './pokemonAbilities.js';
import { displayPokemonStats } from './pokemonStats.js';
import { clearFields } from './clearFields.js';

let searchQuery = document.getElementById("search");

document.getElementById('searchButton').addEventListener('click', async () => {
  // will currently accept id number or name of pokemon with all lower case - can not display or search multiple pokemon.
let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`);
let data = await response.json();
displayPokemonImage(data);
displayPokemonName(data);
displayPokemonAbilities(data);
displayPokemonStats(data);


//localStorage.setItem("image", JSON.stringify(displayPokemonImage(data)));
// localStorage.setItem("name", JSON.stringify(displayPokemonName(data)));
// localStorage.setItem("abilities", JSON.stringify(displayPokemonAbilities(data)));
// localStorage.setItem("statistics", JSON.stringify(displayPokemonStats(data)));


console.log(localStorage);

})


let clearAll = document.getElementById("clearAll");
clearAll.addEventListener('click', function () {
  clearFields();
} )




















