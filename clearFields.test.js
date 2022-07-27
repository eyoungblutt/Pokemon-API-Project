/**
 * @jest-environment jsdom
 */

import { clearFields } from './clearFields.js';

describe('clearFields.js', function() {test("clears pokemonCard innerText", () => {
  expect(clearFields()).toBe(" ");});
});
