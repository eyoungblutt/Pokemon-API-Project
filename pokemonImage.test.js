import { displayPokemonImage } from './PokemonImage.js';

describe("displayPokemonImage", () => {
  test("it should get the pokemon image from data", () => {
    const input = [
      {"image": 
        {imageLink: "http.//www.image.com.au",
         name: "joe",
         age : 55
        }
      }]
  const output = input.image.imageLink;
  expect(displayPokemonImage(input)).toEqual(output);
  })
})