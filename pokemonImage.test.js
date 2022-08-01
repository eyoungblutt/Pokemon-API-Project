import { getPokemonImage } from './PokemonImage.js';

// passes

describe("getPokemonImage", () => {
  test("it should get the pokemon image from data", () => {
    const input = {
      sprites: 
        {front_default: "http.//www.image.com.au"}
      }
  expect(getPokemonImage(input)).toEqual("http.//www.image.com.au");
  })
})