/**
 * @jest-environment jsdom
 */

import { callAPI } from './pokemonAPI';

jest.mock('./pokemonAPI');
const mockedCallAPI = callAPI.get
const domain = 'http://fakeapi.com/'
const mockedConsole = jest.spyOn(global.console, 'error');
const mockedDataOne = {
  "name": "Joseph",
  "image": 'www.image.com.au',
  "abilities": [],
  "statistics": []
  }
  const mockedDataTwo = {
    "name": 13,
    "image": 'www.image.com.au',
    "abilities": [],
    "statistics": []
    }
  

describe("test callAPI()", () => {
  beforeEach(() => {
    mockedCallAPI.mockReset();
    mockedConsole.mockReset();
    events={};
})

document.addEventListener = jest.fn((event, callback) => {
  events[event] = callback;
});

  describe("callAPI()", () => {
   it('should get back api data', async() => {
      mockedCallAPI.mockResolvedValueOnce({ data: [{ test: 'Hi I worked!' }] })
    const data = await callAPI(domain)
    expect(mockedCallAPI).toBeCalledTimes(1)
})
    })
  })

    describe("callAPI()", () => {
    it('Should get data from the api', async () => {
      mockedCallAPI.mockResolvedValueOnce({ data: [mockedDataOne, mockedDataTwo]})
      const data = await callAPI(domain)
    expect(mockedCallAPI).toBeCalledTimes(1)
    expect(data[0]).toEqual(
      expect.objectContaining({
          name: mockedDataOne.name
        })
      )
    })
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

   describe("call returns no data", () => {

   })
 // if database can't be reached?
