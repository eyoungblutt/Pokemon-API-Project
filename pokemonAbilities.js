export let displayPokemonAbilities = (data) => {
  let abilitiesHeading = document.createElement("h3");
  abilitiesHeading.id = "abilitiesHeading";
  abilitiesHeading.innerText = "Abilities: ";
  document.getElementById("pokemonCard").appendChild(abilitiesHeading);


  let abilityArr = data.abilities;
  for(let i = 0; i < abilityArr.length; i++){
    let abName = abilityArr[i].ability.name;
    let newAbility = document.createElement("p"); 
    newAbility.id = "pokemonAbilities";
    newAbility.innerText = abName;
    document.getElementById("pokemonCard").appendChild(newAbility);
  }
  }