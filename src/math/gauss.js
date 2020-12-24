"use strict";
/**
 * Arquivo: gauss.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of normal distribution, propability density'
 * Data: 18/03/2020
 */
const integration = require("./integration");

export const gauss = {
  zscore: (x, mu, sigma) => (x - mu) / sigma,
  normalizationFactor: (sigma) => 1 / (sigma * Math.sqrt(2 * Math.PI)),
  spdf: (z) =>
    gauss.normalizationFactor(1) *
    Math.exp(Math.pow(gauss.zscore(z, 0, 1), 2) * -0.5),
  standardNormalDistribution: (z) =>
    integration.trapezoid(gauss.spdf, -50, z, Math.pow(10, 4)),
};
