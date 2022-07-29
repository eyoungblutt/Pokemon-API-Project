import { displayPokemonStats } from './pokemonStats.js';

describe("displayPokemonStats", () => {
  test("it should get the pokemon stats from data", () => {
    let input = [
      {"image": 
        [{one:"one", 
        two: "two", 
        three: "three"}
         ], 
      }]
  let output = input.image;
  expect(displayPokemonStats(input)).objectContaining(`${output.key}: ${output.value}`);
  })
})