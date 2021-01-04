"use strict";
/**
 * Arquivo: cholesky.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of cholesky decomposition and solver for linear equation systems
 * Data: 30/11/2020
 *
 */
export const decompose = (matrix) => {
  const matrix_size = matrix.length;
  let k,
    sum = 0,
    diagonal_part = [];

  for (let i = 0; i < matrix_size; i++) {
    for (let j = i; j < matrix_size; j++) {
      for (sum = matrix[i][j], k = i - 1; k >= 0; k--)
        sum -= matrix[i][k] * matrix[j][k];

      if (i == j) {
        if (sum <= 0.0) throw "cholesky composition failed";
        diagonal_part[i] = sum ** 0.5; //sqrt
      } else matrix[j][i] = sum / diagonal_part[i];
    }
  }

  return { lower_triangular: matrix, diagonal: diagonal_part };
};

export const solver = (matrix, diagonal, b) => {
  const matrix_size = matrix.length;
  let i,
    k,
    sum = 0,
    x = [];

  // Solve L . y = b
  for (i = 0; i < matrix_size; i++) {
    for (sum = b[i], k = i - 1; k >= 0; k--) sum -= matrix[i][k] * x[k];
    x[i] = sum / diagonal[i];
  }

  // // Solve LT . x = y
  // for (i = n; i >= 0; i--) {
  //   for (sum = x[i], k = i + 1; k < n; k++) sum -= matrix[k][i] * x[k];
  //   x[i] = sum / diagonal[i];
  // }

  return x;
};
