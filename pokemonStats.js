export let displayPokemonStats = (data) => {
  let statsArr = data.stats;
  let statsHeading = document.createElement("h3");
  statsHeading.id = "statsHeading";
  statsHeading.innerHTML = "Statistics: "
  document.getElementById("pokemonCard").appendChild(statsHeading);



  for(let i = 0; i < statsArr.length; i++){
    let statsName = statsArr[i].stat.name;
    let statsAmount = statsArr[i].base_stat;
    let newStats = document.createElement("p"); 
    newStats.id = "pokemonStats";
    newStats.innerHTML = `${statsName}: ${statsAmount}`;
    document.getElementById("pokemonCard").appendChild(newStats);
  }
  }