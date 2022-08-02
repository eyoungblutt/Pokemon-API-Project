import { getPokemonStats } from './pokemonStats.js';

describe("getPokemonStats", () => {
  test("it should get the pokemon stats from data", () => {
    let input = {stats: [
      {base_stat: 5,
      stat: 
        {name:"Joe", 
        }
      } 
    ]}
  
expect(getPokemonStats(input)).toEqual(input.stats);
})
})