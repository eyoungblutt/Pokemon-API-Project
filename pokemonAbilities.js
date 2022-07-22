export let displayPokemonAbilities = (data) => {
  let abilityArr = data.abilities;
  for(let i = 0; i < abilityArr.length; i++){
    let abName = abilityArr[i].ability.name;
    let newParagraph = document.createElement("p"); 
  newParagraph.innerHTML = abName;
     document.getElementById("pokemonAbilities").appendChild(newParagraph);
  }
  }