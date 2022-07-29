import { displayPokemonAbilities } from "./pokemonAbilities.js";

describe("displayPokemonAbilities", () => {
  test("it should get the pokemon abilities from data", () => {
    let input = [
      {"image": 
        [{one:"one", 
          two: "two", 
          three: "three"}
         ], 
      }]
  let output = input.image;
  expect(displayPokemonAbilities(input)).toEqual(` ${output.value}`);
  })
})