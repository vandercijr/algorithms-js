/**
 * Arquivo: goalseek-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'goalseek.js'
 * Data: 30/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */

import { goalseek } from "../src/math/goalseek";

describe("TDD for goalseek method", () => {
  it("Should find the root of a function", () => {
    expect(goalseek(4, 0, 10, 0.00001, 200, (x) => x * x)).toBeCloseTo(2.0, 2);
  });
});
