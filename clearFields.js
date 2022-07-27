export let clearFields = () => {
  document.getElementById("pokemonCard").innerHTML = "";
  document.getElementById("errorMessage").innerText = "";
  localStorage.clear();
}

