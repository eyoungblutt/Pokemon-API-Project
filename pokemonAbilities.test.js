import { getPokemonAbilities } from "./pokemonAbilities.js";

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