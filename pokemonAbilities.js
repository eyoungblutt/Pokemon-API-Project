export let displayPokemonAbilities = (data) => {
  let abilityArr = data.abilities;
  for(let i = 0; i < abilityArr.length; i++){
    let abName = abilityArr[i].ability.name;
    let newAdility = document.createElement("h3"); 
    newAdility.innerHTML = ` Abilities: ${abName}`;
     document.getElementById("pokemonCard").appendChild(newAdility);
  }
  }