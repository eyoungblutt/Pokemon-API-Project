import { newPokemonData, callAPI} from './pokemonData.js';
import { clearFields } from "./clearFields.js";
import { appendData } from './displayPokemon.js';

let searchQuery = document.getElementById("search");
let objectArr = [];

//--------------------------------------------------------------------------------

  document
    .getElementById("searchButton")
    .addEventListener("click", async () => { 
      let response = await fetch (callAPI(searchQuery));

    if (response.ok === true) {
        let data = await response.json();
        document.getElementById("errorMessage").innerText = "";
        appendData(data);
        objectArr.push(newPokemonData(data));
        localStorage.setItem("objectArr", JSON.stringify(objectArr));
      } else {
        document.getElementById("errorMessage").innerText =
          "Oops! Please double check your entry is a pokemon name or index number and try again.";
      }
    });


    
//------------------------------------------------------------------------------


let outLocalStorage = JSON.parse(window.localStorage.getItem("objectArr"));

outLocalStorage.forEach( function(localStorageData) {
  pokemonCard.innerHTML += `<p class ="nameInformation"> ${localStorageData.pokemonName}</p>`;

  pokemonCard.innerHTML += `<img src="${localStorageData.image}" class="pokemonImage">`;


  pokemonCard.innerHTML += `<h3 class="abilitiesHeading"> Abilities: </h3>`;
    for (let i = 0; i < localStorageData.abilities.length; i++) {
      let abName = localStorageData.abilities[i].ability.name;
      pokemonCard.innerHTML += `<p class="pokemonAbilities">${abName}</p>`;
    }

  pokemonCard.innerHTML += `<h3 class="statsHeading"> Statistics: </h3>`;
    for (let i = 0; i < localStorageData.statistics.length; i++) {
      let statsName = localStorageData.statistics[i].stat.name;
      let statsAmount = localStorageData.statistics[i].base_stat;
      pokemonCard.innerHTML += `<p class="pokemonAbilities">${statsName}: ${statsAmount}</p>`;
    }
  });

//------------------------------------------------------------------------------

let clearAll = document.getElementById("clearAll");
  clearAll.addEventListener("click", function () {
    clearFields();
  });

//---------------------------------------------------------------------------
