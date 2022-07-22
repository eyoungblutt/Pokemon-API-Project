export let displayPokemonStats = (data) => {
  let statsArr = data.stats;
  for(let i = 0; i < statsArr.length; i++){
    let statsName = statsArr[i].stat.name;
    let statsAmount = statsArr[i].base_stat;
    let newStats = document.createElement("h3"); 
    newStats.innerHTML = `${statsName}: ${statsAmount}`;
     document.getElementById("pokemonCard").appendChild(newStats);
  }
  }