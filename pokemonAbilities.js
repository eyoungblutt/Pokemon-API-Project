export let displayPokemonAbilities = (data) => {
  let abilityArr = data.abilities;

  for(let i = 0; i < abilityArr.length; i++){
   return abilityArr[i].ability.name; 
  }
  }


  // let abilitiesHeading = document.createElement("h3");
  // abilitiesHeading.id = "abilitiesHeading";
  // abilitiesHeading.innerText = "Abilities: ";
  // document.getElementById("pokemonCard").appendChild(abilitiesHeading);
  // let newAbility = document.createElement("p"); 
  //   newAbility.id = "pokemonAbilities";
  //   newAbility.innerText = abName;
  //   document.getElementById("pokemonCard").appendChild(newAbility);

  // git ignore
  // debug jest node js
  //npmi