export let displayPokemonStatistics =(pokemonDetails) => {
  let statsHeading = document.createElement("h3");
  statsHeading.className = "statsHeading";
  statsHeading.innerText = "Statistics: "
  document.getElementById("pokemonCard").appendChild(statsHeading);

  let statsArr = [...pokemonDetails];
  
  for(let i = 0; i < statsArr.length; i++){
    let statsName = statsArr[i].stat.name;
    let statsAmount = statsArr[i].base_stat;

    let newStats = document.createElement("p"); 
    newStats.className = "pokemonStats";
    newStats.innerText = `${statsName}: ${statsAmount}`;
    document.getElementById("pokemonCard").appendChild(newStats);
  }
    
  
}