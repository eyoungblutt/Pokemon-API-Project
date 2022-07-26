import { displayPokemonImage } from './PokemonImage.js';
import { displayPokemonName } from './pokemonName.js';
import { displayPokemonAbilities } from './pokemonAbilities.js';
import { displayPokemonStats } from './pokemonStats.js';
import { clearFields } from './clearFields.js';


let searchQuery = document.getElementById("search");
let objectArr = [];

// store objects into an array as they are created.
//have array push to localstorage
//this should show all items in local storage.
//loop over it after you reduce it 
  //dev tools application - to delete data.
//--------------------------------------------------------------------------------

document.getElementById('searchButton').addEventListener('click', async () => {
let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`);
if(response.ok === true){
let data = await response.json();
document.getElementById("errorMessage").innerText = "";
displayPokemonImage(data);
displayPokemonName(data);
displayPokemonAbilities(data);
displayPokemonStats(data);

function pokemonData(image, pokemonName, abilities, statistics) {
  this.image = image;
  this.pokemonName= pokemonName,
  this.abilities= abilities,
  this.statistics= statistics

};

let newPokemonData =  new pokemonData(data.sprites.front_default, data.name, data.abilities, data.stats);
objectArr.push(newPokemonData);
console.log(objectArr);
localStorage.setItem("objectArr", JSON.stringify(objectArr));
console.log(localStorage);
}
else {
  document.getElementById("errorMessage").innerText = "Oops! Please double check your entry is a pokemon name or index number and try again."};

})

//------------------------------------------------------------------------------


let clearAll = document.getElementById("clearAll");
clearAll.addEventListener('click', function () {
  clearFields();
} )

//---------------------------------------------------------------------------


















