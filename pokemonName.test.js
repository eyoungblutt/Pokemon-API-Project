import { displayPokemonName } from './pokemonName';

//passes

describe("displayPokemonName", () => {
  test("it should dispmay name from data given", () => {
    const input = 
      { name: "joe" }
    expect(displayPokemonName(input)).toEqual("joe" );
  });
});

//codepen to debug - 