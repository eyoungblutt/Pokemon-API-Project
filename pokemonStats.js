export let displayPokemonStats = (data) => {
  let statsArr = data.stats;
  for(let i = 0; i < statsArr.length; i++){
    let statsName = statsArr[i].stat.name;
    let statsAmount = statsArr[i].base_stat;
    let newParagraph = document.createElement("p"); 
  newParagraph.innerHTML = `${statsName}: ${statsAmount}`;
     document.getElementById("pokemonStats").appendChild(newParagraph);
  }
  }