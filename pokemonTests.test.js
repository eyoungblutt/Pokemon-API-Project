import { getPokemonImage, getPokemonName, getPokemonStats, getPokemonAbilities, newPokemonData, callAPI} from './pokemonData.js';

describe("getPokemonStats", () => {
  test("it should get the pokemon stats from data", () => {
    let input = {stats: [
      {base_stat: 5,
      stat: 
        {name:"Joe", 
        }
      } 
    ]}
  
expect(getPokemonStats(input)).toEqual(input.stats);
})
})

describe("getPokemonName", () => {
  test("it should dispmay name from data given", () => {
    const input = 
      { name: "joe" }
    expect(getPokemonName(input)).toEqual("joe" );
  });
});

describe("getPokemonImage", () => {
  test("it should get the pokemon image from data", () => {
    const input = {
      sprites: 
        {front_default: "http.//www.image.com.au"}
      }
  expect(getPokemonImage(input)).toEqual("http.//www.image.com.au");
  })
})

describe("getPokemonAbilities", () => {
  test("it should get the pokemon abilities from data", () => {
    let input = {abilities: [{
      ability: {
        name: "kicking"
    }
    } 
  ]
  }
  expect(getPokemonAbilities(input)).toEqual(input.abilities);
  })
})

//doesnt pass
describe("newPokemonData", () => {
  test("it should create an object", () => {
    let PokemonData = {
      sprites: {
        front_default: "image"
      },
      species: { name: "joe"},
      abilities: [{ability: { name: "kicking"} }],
      stats: [{base_stat: 48}]    
    } 
    
    expect(newPokemonData(PokemonData.species.name)).toEqual("joe")
  })
})


describe("callAPI", () => {
  test("it should return a string", () => {
    let testText = "apples";
    
console.log(testText);
console.log(callAPI(testText));

    expect(callAPI(testText)).toEqual("https://pokeapi.co/api/v2/pokemon/apples")
    

  })
})

