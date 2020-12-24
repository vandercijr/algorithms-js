"use strict";
/**
 * Arquivo: goalseek.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of goal seek function
 * Data: 28905/2020
 *
 */
import { bisection } from "./bisection";

export const goalseek = (
  seek_value,
  a,
  b,
  tolerance,
  number_of_iterations,
  fn
) => bisection(seek_value, a, b, tolerance, number_of_iterations, fn);
