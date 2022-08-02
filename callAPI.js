export let callAPI = async (searchQuery) => { let response = await fetch(
  `https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`
);
let data = await response.json();
//console.log(data);
return data;
}
