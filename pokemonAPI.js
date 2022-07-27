import { displayPokemonImage } from './PokemonImage.js';
import { displayPokemonName } from './pokemonName.js';
import { displayPokemonAbilities } from './pokemonAbilities.js';
import { displayPokemonStats } from './pokemonStats.js';
import { clearFields } from './clearFields.js';


let searchQuery = document.getElementById("search");
let objectArr = [];

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

//------------------------------------------------------------------------------
//gets individual key value pairs for each pokemon's details and displays on screen.

let outLocalStorage = (JSON.parse(window.localStorage.getItem("objectArr")));
 
for(let i = 0; i < outLocalStorage.length; i++) {
  let newObjectArr = [];
  newObjectArr.push(outLocalStorage[i]);
  for(let [key, value] of Object.entries(newObjectArr[0])){

    if(key === "image"){
      let newImage = document.createElement("img"); 
      newImage.setAttribute("src", value);
      newImage.id = "pokemonImage";
      document.getElementById("pokemonCard").appendChild(newImage);
    }
    else if (key === "pokemonName"){ 

      let newHeading = document.createElement("h3");
      newHeading.innerText = "Name: ";
      newHeading.id = "pokemonName";
      let nameInformation = document.createElement("p");
      nameInformation.innerText = value;
      nameInformation.id = "nameInformation";
      document.getElementById("pokemonCard").appendChild(newHeading);
      document.getElementById("pokemonCard").appendChild(nameInformation);
    }
    else if (key === "abilities"){
      let abilitiesHeading = document.createElement("h3");
      abilitiesHeading.id = "abilitiesHeading";
      abilitiesHeading.innerText = "Abilities: ";
      document.getElementById("pokemonCard").appendChild(abilitiesHeading);
    
    
      let abilityArr = value;
      for(let i = 0; i < abilityArr.length; i++){
        let abName = abilityArr[i].ability.name;
        let newAbility = document.createElement("p"); 
        newAbility.id = "pokemonAbilities";
        newAbility.innerText = abName;
        document.getElementById("pokemonCard").appendChild(newAbility);}
    }
    else if(key === "statistics"){
      let statsArr = value;
      let statsHeading = document.createElement("h3");
      statsHeading.id = "statsHeading";
      statsHeading.innerText = "Statistics: "
      document.getElementById("pokemonCard").appendChild(statsHeading);

      for(let i = 0; i < statsArr.length; i++){
      let statsName = statsArr[i].stat.name;
      let statsAmount = statsArr[i].base_stat;
      let newStats = document.createElement("p"); 
      newStats.id = "pokemonStats";
      newStats.innerText = `${statsName}: ${statsAmount}`;
      document.getElementById("pokemonCard").appendChild(newStats);
      }
  
  }
}
}


//------------------------------------------------------------------------------


let clearAll = document.getElementById("clearAll");
clearAll.addEventListener('click', function () {
  clearFields();
} )

//---------------------------------------------------------------------------



















