export let displayPokemonStats = (data) => {
  let statsArr = data.stats;
for(let i = 0; i < statsArr.length; i++){
    let statsName = statsArr[i].stat.name;
    let statsAmount = statsArr[i].base_stat;
  return`${statsName}: ${statsAmount}`;
  }
}
  


  // let statsHeading = document.createElement("h3");
  // statsHeading.id = "statsHeading";
  // statsHeading.innerText = "Statistics: "
  // document.getElementById("pokemonCard").appendChild(statsHeading);


  // for(let i = 0; i < statsArr.length; i++){
  //   let statsName = statsArr[i].stat.name;
  //   let statsAmount = statsArr[i].base_stat;
  //   let newStats = document.createElement("p"); 
  //   newStats.id = "pokemonStats";
  //   newStats.innerText = `${statsName}: ${statsAmount}`;
  //   document.getElementById("pokemonCard").appendChild(newStats);