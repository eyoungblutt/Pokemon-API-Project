
import { sum } from "./sum.js";


describe('sum.js', function() {test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);});
});

test("adds 5.5 + 10.2 to equal 15.7", () => {
  expect(sum(5.5 , 10.2 )).toBe(15.7);
});

test("adds -6 + 3 to equal 15.7", () => {
  expect(sum(-6 , 3)).toBe(-3);
});



