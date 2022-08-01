import { getPokemonName } from './pokemonName';

//passes

describe("getPokemonName", () => {
  test("it should dispmay name from data given", () => {
    const input = 
      { name: "joe" }
    expect(getPokemonName(input)).toEqual("joe" );
  });
});

//codepen to debug - 