let displayPokemonAbilities = () => {
  let abilitiesHeading = document.createElement("h3");
  abilitiesHeading.className = "abilitiesHeading";
  abilitiesHeading.innerText = "Abilities: ";
  return abilitiesHeading;
};

 let displayPokemonAbilitiesDetail = (pokemonDetials) => {
  for(let i = 0; i < pokemonDetials.length; i++){
    let newAbility = document.createElement("p"); 
      newAbility.className = "pokemonAbilities";
      newAbility.innerText = pokemonDetials[i].ability.name;
      console.log(newAbility);
      return newAbility; 
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
  let statsName = pokemonDetails[i].stat.name;
  let statsAmount = pokemonDetails[i].base_stat;

  let newStats = document.createElement("p"); 
  newStats.className = "pokemonStats";
  newStats.innerText = `${statsName}: ${statsAmount}`;
  return newStats;
}
}

  export { displayPokemonAbilities, displayPokemonStatistics, displayPokemonName, displayPokemonImage, displayPokemonNameHeading, displayPokemonAbilitiesDetail, displayPokemonStatisticsDetials}