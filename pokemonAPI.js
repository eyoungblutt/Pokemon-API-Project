import { displayPokemonImage } from './PokemonImage.js';
import { displayPokemonName } from './pokemonName.js';
import { displayPokemonAbilities } from './pokemonAbilities.js';
import { displayPokemonStats } from './pokemonStats.js';


//want the search buttoon to call/ alter the API fetch linkdetails

let searchQuery = document.getElementById("search");

document.getElementById('searchButton').addEventListener('click', async () => {

let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${searchQuery.value}`);
if(response.ok){
  let data = await response.json();
  displayPokemonImage(data);
  displayPokemonAbilities(data);
  displayPokemonStats(data);
  displayPokemonName(data);

}
else {
  return "Network Response Error";
}
})






