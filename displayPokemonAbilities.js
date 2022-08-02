export let displayPokemonAbilities = (pokemonDetials) => {
  let abilitiesHeading = document.createElement("h3");
  abilitiesHeading.className = "abilitiesHeading";
  abilitiesHeading.innerText = "Abilities: ";
  document.getElementById("pokemonCard").appendChild(abilitiesHeading);

  
  for(let i = 0; i < pokemonDetials.length; i++){
  let newAbility = document.createElement("p"); 
    newAbility.className = "pokemonAbilities";
    newAbility.innerText = pokemonDetials[i].ability.name;
    document.getElementById("pokemonCard").appendChild(newAbility) // GK: This function still knows about something outside itself?
  }
  }