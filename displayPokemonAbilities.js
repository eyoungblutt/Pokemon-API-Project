export let displayPokemonAbilities = (pokemonDetials) => {
  let abilitiesHeading = document.createElement("h3");
  abilitiesHeading.className = "abilitiesHeading";
  abilitiesHeading.innerText = "Abilities: ";
  document.getElementById("pokemonCard").appendChild(abilitiesHeading);

  let abilityArr = [...pokemonDetials]; // GK: Why use the spread operator with pokemonDetails?
  for(let i = 0; i < abilityArr.length; i++){
  let newAbility = document.createElement("p"); 
    newAbility.className = "pokemonAbilities";
    newAbility.innerText = abilityArr[i].ability.name;
    document.getElementById("pokemonCard").appendChild(newAbility) // GK: This function still knows about something outside itself?
  }
  }