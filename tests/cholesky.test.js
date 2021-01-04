/**
 * Arquivo: cholesky-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'cholesky.js'
 * Data: 30/11/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */

import { decompose, solver } from "../src/math/cholesky";

describe("TDD for cholesky decomposition method", () => {
  it("Should find the decomposed matrix", () => {
    const input_matrix = [
      [6, 15, 55],
      [15, 55, 225],
      [55, 225, 979],
    ];

    const decomposed_matrix = {
      lower_triangular: [
        [6, 15, 55],
        [6.123724356957946, 55, 225],
        [22.45365597551247, 20.916500663351886, 979],
      ],
      diagonal: [2.449489742783178, 4.183300132670377, 6.110100926607785],
    };

    expect(decompose(input_matrix)).toEqual(decomposed_matrix);
  });
});

describe("TDD for cholesky decomposition solver method", () => {
  it("Should find the solution for linear system", () => {
    const input_matrix = [
      [6, 15, 55],
      [15, 55, 225],
      [55, 225, 979],
    ];
    const expected_result = [76, 295, 1259];

    const decomposed_matrix = decompose(input_matrix);

    const solution = [31.0269, 25.0998, 6.1101];

    const _solver = solver(
      decomposed_matrix.lower_triangular,
      decomposed_matrix.diagonal,
      expected_result
    ).map((item) => parseFloat(item.toFixed(4)));

    expect(_solver).toEqual(expect.arrayContaining(solution));
    expect(solution).toEqual(expect.arrayContaining(_solver));
  });
});
