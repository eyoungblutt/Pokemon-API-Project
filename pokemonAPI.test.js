import { callAPI } from './pokemonAPI';




//testing API endpoint call

// should respond with JSON onject containing pokemon details
//status code 200


jest.mock('./pokemonAPI');

 describe("given a correct string endpoint", async () => {
const response = await testPokemonEndpoint(callAPI).post("/pokemon").send({
  "searchQuery": "ditto"
})
expect(response.statusCode).toBe(200)
  })
// //-------------------------------------------------------------------
  
  
  describe("given a correct number endpoint", () => {
// // should respond with JSON onject containing pokemon details
// //status code 200
 })


// //-------------------------------------------------------------------
  describe("given an incorrect string endpoint", () => {
// //status code 404
// //show error message
 })


// //-------------------------------------------------------------------
   describe("given a incorrect number endpoint", () => {
// //status code 404
// // show error message
   })

 // if database can't be reached?
