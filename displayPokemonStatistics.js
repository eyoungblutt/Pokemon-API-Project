export let displayPokemonStatistics =(pokemonDetails) => {
  let statsHeading = document.createElement("h3");
  statsHeading.className = "statsHeading";
  statsHeading.innerText = "Statistics: "
  document.getElementById("pokemonCard").appendChild(statsHeading);

  for(let i = 0; i < pokemonDetails.length; i++){
    let statsName = pokemonDetails[i].stat.name;
    let statsAmount = pokemonDetails[i].base_stat;

    let newStats = document.createElement("p"); 
    newStats.className = "pokemonStats";
    newStats.innerText = `${statsName}: ${statsAmount}`;
    document.getElementById("pokemonCard").appendChild(newStats);
  }
    
  
}