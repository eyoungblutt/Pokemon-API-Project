import { getPokemonImage } from './PokemonImage.js';
import { getPokemonName } from './pokemonName.js';
import { getPokemonAbilities } from './pokemonAbilities.js';
import { getPokemonStats } from './pokemonStats.js';
import { clearFields } from './clearFields.js';
import { displayPokemonName } from './displayPokemonName.js';
import { displayPokemonImage } from './displayPokemonImage.js';
import { displayPokemonAbilities } from './displayPokemonAbilities.js';
import { displayPokemonStatistics } from './displayPokemonStatistics.js';



let searchQuery = document.getElementById("search");
let objectArr = [];

//--------------------------------------------------------------------------------
let callAPI = () => {
  
 document.getElementById('searchButton').addEventListener('click', async () => {
      let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`);
      if(response.ok === true){
      let data = await response.json();


document.getElementById("errorMessage").innerText = "";
getPokemonImage(data);
getPokemonName(data);
getPokemonAbilities(data);
getPokemonStats(data);

displayPokemonImage(getPokemonImage(data));
displayPokemonName(getPokemonName(data));
displayPokemonAbilities(getPokemonAbilities(data));
displayPokemonStatistics(getPokemonStats(data));

  class pokemonData {
    constructor(image, pokemonName, abilities, statistics) {
      this.image = image;
      this.pokemonName = pokemonName,
      this.abilities = abilities,
      this.statistics = statistics;
    }
  };

let newPokemonData =  new pokemonData(data.sprites.front_default, data.name, data.abilities, data.stats);
objectArr.push(newPokemonData);
localStorage.setItem("objectArr", JSON.stringify(objectArr));
}
else {
  document.getElementById("errorMessage").innerText = "Oops! Please double check your entry is a pokemon name or index number and try again."};
})
};

callAPI();
//------------------------------------------------------------------------------
//gets individual key value pairs for each pokemon's details and displays on screen.

let outLocalStorage = (JSON.parse(window.localStorage.getItem("objectArr")));
 
for(let i = 0; i < outLocalStorage.length; i++) {
  let newObjectArr = [];
  newObjectArr.push(outLocalStorage[i]);
  for(let [key, value] of Object.entries(newObjectArr[0])){

    if(key === "image"){
      pokemonCard.innerHTML += `<img src="${value}" class="pokemonImage">`
    }
    else if (key === "pokemonName"){ 
      pokemonCard.innerHTML += `<h3 class="pokemonName">Name: <h3>
      <p class ="nameInformation"> ${value}<p>`;
    }
    else if (key === "abilities"){
      pokemonCard.innerHTML += `<h3 class="abilitiesHeading"> Abilities: <h3>`

      let abilityArr = value;
      for(let i = 0; i < abilityArr.length; i++){
        let abName = abilityArr[i].ability.name;
        pokemonCard.innerHTML += `<p class="pokemonAbilities">${abName}<p>`; 
    }
  }
    else if(key === "statistics"){
      let statsArr = value;
      pokemonCard.innerHTML += `<h3 class="statsHeading"> Statistics: <h3>`;

      for(let i = 0; i < statsArr.length; i++){
      let statsName = statsArr[i].stat.name;
      let statsAmount = statsArr[i].base_stat;
      pokemonCard.innerHTML += `<p class="pokemonAbilities">${statsName}: ${statsAmount}<p>`;
      }
  }
}
}

//------------------------------------------------------------------------------


let clearAll = document.getElementById("clearAll");
window.onload=function(){
clearAll.addEventListener('click', function () {
  clearFields();
} )
}

//---------------------------------------------------------------------------



















