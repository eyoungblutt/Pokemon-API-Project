import { displayPokemonName } from './pokemonName';

//passes

describe("displayPokemonName", () => {
  test("it should dispmay name from data given", () => {
    const input = [
      { name: "joe" },
    ];
    const output = input.name;
    expect(displayPokemonName(input)).toEqual(output);
  });
});