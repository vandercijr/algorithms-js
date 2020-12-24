/**
 * Arquivo: gauss-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'gauss.js'
 * Data: 01/03/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */

import { gauss } from "../src/math/gauss";

describe("TDD for normal distribution operations", () => {
  it("Should calculate the zscore of a random variable", () => {
    expect(gauss.zscore(12, 2, 5)).toBe(2);
    expect(gauss.zscore(10, 1, 5)).toBe(1.8);
  });

  it("Should calculate the normalization factor for normal distribution formula", () => {
    expect(gauss.normalizationFactor(1)).toBeCloseTo(0.39894228, 8);
    expect(gauss.normalizationFactor(2)).toBeCloseTo(0.19947114, 8);
  });

  it("Should calculate the standard probability density function", () => {
    expect(gauss.spdf(1)).toBeCloseTo(0.24197072, 8);
  });

  it("Should calculate the cumulative standard normal distribution returning a value from z table", () => {
    expect(gauss.standardNormalDistribution(1)).toBeCloseTo(0.841344222, 9);
  });
});
