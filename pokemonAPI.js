import { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities} from './pokemonData.js';
import { clearFields } from "./clearFields.js";
import { displayPokemonAbilities, displayPokemonStatistics, displayPokemonName, displayPokemonImage,} from './displayPokemon.js';
import { createElementOne, createElementTwo, createElementFour, createElementThree } from './createElements.js';

let searchQuery = document.getElementById("search");
let objectArr = [];

//--------------------------------------------------------------------------------
function callAPI() {
  document
    .getElementById("searchButton")
    .addEventListener("click", async () => { // GK: How will you unit test all this code if it's inside a click event listener?
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`
      );
      if (response.ok === true) {
        let data = await response.json();

        document.getElementById("errorMessage").innerText = "";

        let newElementTwo = document.getElementById("pokemonCard").appendChild(createElementTwo());
        newElementTwo.innerText = displayPokemonImage(getPokemonImage(data));

 console.log(getPokemonImage(data));
 console.log(displayPokemonImage(getPokemonImage(data)));


        
        // let newElement = document.getElementById("pokemonCard").appendChild(createElementOne());
        // //newElement.innerText = displayPokemonName(getPokemonName(data));
        
        // let newElementThree = document.getElementById("pokemonCard").appendChild(createElementThree());
        // newElementThree.innerText = displayPokemonAbilities(getPokemonAbilities(data));

        // let newElementFour = document.getElementById("pokemonCard").appendChild(createElementFour());
        // newElementFour.innerText = getPokemonStats(data);
        //
        // 
        // displayPokemonAbilities(getPokemonAbilities(data));
        // displayPokemonStatistics(getPokemonStats(data));

        let newPokemonData = {
          image: data.sprites.front_default,
          pokemonName: data.name,
          abilities: data.abilities,
          statistics: data.stats
        };

        objectArr.push(newPokemonData);

        localStorage.setItem("objectArr", JSON.stringify(objectArr));
      } else {
        document.getElementById("errorMessage").innerText =
          "Oops! Please double check your entry is a pokemon name or index number and try again.";
      }
    });
};

callAPI();
//------------------------------------------------------------------------------


let outLocalStorage = JSON.parse(window.localStorage.getItem("objectArr"));

outLocalStorage.forEach( function(localStorageData) {
  pokemonCard.innerHTML += `<img src="${localStorageData.image}" class="pokemonImage">`;

  pokemonCard.innerHTML += `<h3 class="pokemonName">Name: </h3> `;
  pokemonCard.innerHTML += `<p class ="nameInformation"> ${localStorageData.pokemonName}</p>`;

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
