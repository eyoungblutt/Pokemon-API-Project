import { displayPokemonAbilities } from "./pokemonAbilities.js";

describe("displayPokemonAbilities", () => {
  test("it should get the pokemon abilities from data", () => {
    let input = {abilities: [{
      ability: {
        name: "kicking"
    }
    } 
  ]
  }

  expect(displayPokemonAbilities(input)).toEqual("kicking");
  })
})