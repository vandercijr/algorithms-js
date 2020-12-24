/**
 * Arquivo: integration-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'integration.js'
 * Data: 02/03/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */

import { trapezoid } from "../src/math/integration";

describe("TDD for integration computational methods", () => {
  it("Should calculate the integral of a function", () => {
    expect(trapezoid((x) => x * x, 0, 3, Math.pow(10, 6))).toBeCloseTo(9.0, 8);
  });
});
