import { pokemonData } from "./pokemonConstuctor";

describe("pokemonData" , () => {
  test("It should construct an object from given data", () => {
    
    let newPokemonData = new pokemonData("apple", "Joe", "jumps", "good"); 
    
   expect( newPokemonData.image).toEqual("apple");
   expect(newPokemonData.pokemonName).toEqual("Joe");

  })
  
})