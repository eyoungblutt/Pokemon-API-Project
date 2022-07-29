import { displayPokemonStats } from './pokemonStats.js';

//passes

describe("displayPokemonStats", () => {
  test("it should get the pokemon stats from data", () => {
    let input = {stats: [
      {base_stat: 5,
      stat: 
        {name:"Joe", 
        }
      } 
    ]}
expect(displayPokemonStats(input)).toEqual("Joe: 5");
})
})