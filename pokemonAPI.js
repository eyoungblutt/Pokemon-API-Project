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


//local storage attempt

let pokemonData = {
  image: data.sprites.front_default,
  firstName: data.name,
  abilities: function(){
    let abilityArr = data.abilities;
  for(let i = 0; i < abilityArr.length; i++){
    let abName = abilityArr[i].ability.name;
    let newArr = [abName];
    return newArr;
  }
  },
  statistics: [1,2,3,4]
};
console.log(pokemonData);

window.localStorage.setItem("pokemonData", JSON.stringify(pokemonData));
console.log(localStorage);

console.log(JSON.parse(localStorage.getItem("pokemonData")));

}
else {
  document.getElementById("errorMessage").innerText = "Oops! Please double check your entry is a pokemon name or index number and try again."};

})


let clearAll = document.getElementById("clearAll");
clearAll.addEventListener('click', function () {
  clearFields();
} )




















