import { displayPokemonImage } from './PokemonImage.js';

// passes

describe("displayPokemonImage", () => {
  test("it should get the pokemon image from data", () => {
    const input = {
      sprites: 
        {front_default: "http.//www.image.com.au"}
      }
  expect(displayPokemonImage(input)).toEqual("http.//www.image.com.au");
  })
})