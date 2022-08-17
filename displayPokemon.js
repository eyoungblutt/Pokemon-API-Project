import { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities} from './pokemonData.js';

let displayPokemonAbilities = () => {
  let abilitiesHeading = document.createElement("h3");
  abilitiesHeading.className = "abilitiesHeading";
  abilitiesHeading.innerText = "Abilities: ";
  return abilitiesHeading;
};

let displayPokemonAbilitiesDetail = (pokemonDetials) => {
  console.log(pokemonDetials);
  for(let i = 0; i < pokemonDetials.length; i++){
    let newAbility = document.createElement("p"); 
    newAbility.className = "pokemonAbilities";
    newAbility.innerText = pokemonDetials[i].ability.name;
    console.log(newAbility)  ; 
  } 
}
 
let displayPokemonImage = (pokemonDetails) => {
  let newImage = document.createElement("img"); 
  newImage.setAttribute("src", pokemonDetails);
  newImage.className = "pokemonImage";
  return newImage;
}

let displayPokemonNameHeading = () => {
  let newHeading = document.createElement("h3");
  newHeading.className = "pokemonName";
  newHeading.innerText = "Name: ";
  return newHeading;
};
    
let displayPokemonName = (pokemonDetails) => {
  let nameInformation = document.createElement("p");
  nameInformation.innerText = pokemonDetails;
  nameInformation.className = "nameInformation";
  return nameInformation;
}
   
let displayPokemonStatistics = () => {
  let statsHeading = document.createElement("h3");
  statsHeading.className = "statsHeading";
  statsHeading.innerText = "Statistics: "
  return statsHeading;
}
  
let displayPokemonStatisticsDetials = (pokemonDetails) => {
  for(let i = 0; i < pokemonDetails.length; i++){
    let newStats = document.createElement("p"); 
    newStats.className = "pokemonStats";
    newStats.innerText = `${pokemonDetails[i].stat.name}: ${pokemonDetails[i].base_stat}`;
    console.log(newStats);
}

}

export function appendData(data){
  document.getElementById("pokemonCard").appendChild(displayPokemonImage(getPokemonImage(data))); 
  document.getElementById("pokemonCard").appendChild(displayPokemonNameHeading(getPokemonName(data)));
  document.getElementById("pokemonCard").appendChild(displayPokemonName(getPokemonName(data)));
  document.getElementById("pokemonCard").appendChild(displayPokemonAbilities(getPokemonAbilities(data)));
  document.getElementById("pokemonCard").appendChild(displayPokemonAbilitiesDetail(getPokemonAbilities(data)));
  
  document.getElementById("pokemonCard").appendChild(displayPokemonStatistics(getPokemonStats(data)));
  document.getElementById("pokemonCard").appendChild(displayPokemonStatisticsDetials(getPokemonStats(data)));
}

