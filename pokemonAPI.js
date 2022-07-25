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



})

let clearAll = document.getElementById("clearAll");
clearAll.addEventListener('click', function () {
  clearFields();
} )


//have option to sve searches
//save button that saves searches
//saved into an array of objects? 
// have class that constructs a new object from the constructor when the save button is clicked. have the data from the functions save into the constructor and then you can view the array??


















