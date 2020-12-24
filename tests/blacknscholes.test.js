/**
 * Arquivo: blacknscholes-test.js
 * Author: Vanderci Curvelo Junior
 * Description: test for the file : 'blacknscholes.js'
 * Data: 01/03/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */

import { blacknscholes } from "../src/math/finance/blacknscholes.js";

const derivative = {
  stock_price: 30,
  strike: 35,
  volatility: 0.72,
  interest_rate: 0.03,
  expiration_days: 0.052055,
};

describe("TDD for black & scholes operations", () => {
  it("Should calculate the expiration days to an given exercise", () => {
    expect(
      blacknscholes.expirationDays("2020-05-27", "2020-06-15")
    ).toBeCloseTo(0.052055, 6);
  });

  it("Should calculate the d1 B&S equation", () => {
    const d1 = blacknscholes.d1Term(
      derivative.stock_price,
      derivative.strike,
      derivative.volatility,
      derivative.interest_rate,
      derivative.expiration_days
    );

    expect(d1).toBeCloseTo(-0.846743919, 9);
  });

  it("Should calculate the d2 term B&S equation", () => {
    const d1 = blacknscholes
      .d1Term(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days
      )
      .toFixed(9);
    const d2 = blacknscholes.d2Term(
      d1,
      derivative.volatility,
      derivative.expiration_days
    );

    expect(d2).toBeCloseTo(-1.011015986, 9);
  });

  it("Should calculate the theoretical option price equation for a call", () => {
    const d1 = blacknscholes
      .d1Term(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days
      )
      .toFixed(9);
    const d2 = blacknscholes
      .d2Term(d1, derivative.volatility, derivative.expiration_days)
      .toFixed(9);

    expect(
      blacknscholes.price(
        derivative.stock_price,
        derivative.strike,
        derivative.interest_rate,
        derivative.expiration_days,
        d1,
        d2,
        "call"
      )
    ).toBeCloseTo(0.51, 2);
  });

  it("Should calculate the theoretical option price equation for a put", () => {
    const d1 = blacknscholes
      .d1Term(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days
      )
      .toFixed(9);
    const d2 = blacknscholes
      .d2Term(d1, derivative.volatility, derivative.expiration_days)
      .toFixed(9);

    expect(
      blacknscholes.price(
        derivative.stock_price,
        derivative.strike,
        derivative.interest_rate,
        derivative.expiration_days,
        d1,
        d2,
        "put"
      )
    ).toBeCloseTo(5.45, 2);
  });

  it("Should calculate the derivative greek delta equation for a call", () => {
    const d1 = blacknscholes
      .d1Term(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days
      )
      .toFixed(9);

    expect(blacknscholes.delta(d1, "call")).toBeCloseTo(0.1986, 4);
  });

  it("Should calculate the derivative greek delta equation for a put", () => {
    const d1 = blacknscholes
      .d1Term(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days
      )
      .toFixed(9);

    expect(blacknscholes.delta(d1, "put")).toBeCloseTo(-0.8014, 4);
  });

  it("Should calculate the derivative greek rho equation for a call", () => {
    const d1 = blacknscholes
      .d1Term(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days
      )
      .toFixed(9);
    const d2 = blacknscholes
      .d2Term(d1, derivative.volatility, derivative.expiration_days)
      .toFixed(9);

    expect(
      blacknscholes.rho(
        derivative.strike,
        derivative.interest_rate,
        derivative.expiration_days,
        d2,
        "call"
      )
    ).toBeCloseTo(0.002838, 6);
  });

  it("Should calculate the derivative greek rho equation for a put", () => {
    const d1 = blacknscholes
      .d1Term(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days
      )
      .toFixed(9);
    const d2 = blacknscholes
      .d2Term(d1, derivative.volatility, derivative.expiration_days)
      .toFixed(9);

    expect(
      blacknscholes.rho(
        derivative.strike,
        derivative.interest_rate,
        derivative.expiration_days,
        d2,
        "put"
      )
    ).toBeCloseTo(-0.015353, 6);
  });

  it("Should calculate the derivative greek gamma equation", () => {
    const d1 = blacknscholes
      .d1Term(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days
      )
      .toFixed(9);

    expect(
      blacknscholes.gamma(
        derivative.stock_price,
        derivative.volatility,
        derivative.expiration_days,
        d1
      )
    ).toBeCloseTo(0.056563, 6);
  });

  it("Should calculate the derivative greek vega equation", () => {
    const d1 = blacknscholes
      .d1Term(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days
      )
      .toFixed(9);

    expect(
      blacknscholes.vega(derivative.stock_price, derivative.expiration_days, d1)
    ).toBeCloseTo(0.01908, 6);
  });

  it("Should calculate the derivative greek theta equation for a call", () => {
    const d1 = blacknscholes
      .d1Term(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days
      )
      .toFixed(9);
    const d2 = blacknscholes
      .d2Term(d1, derivative.volatility, derivative.expiration_days)
      .toFixed(9);

    expect(
      blacknscholes.theta(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days,
        d1,
        d2,
        "call"
      )
    ).toBeCloseTo(-0.036599, 6);
  });

  it("Should calculate the derivative greek theta equation for a put", () => {
    const d1 = blacknscholes
      .d1Term(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days
      )
      .toFixed(9);
    const d2 = blacknscholes
      .d2Term(d1, derivative.volatility, derivative.expiration_days)
      .toFixed(9);

    expect(
      blacknscholes.theta(
        derivative.stock_price,
        derivative.strike,
        derivative.volatility,
        derivative.interest_rate,
        derivative.expiration_days,
        d1,
        d2,
        "put"
      )
    ).toBeCloseTo(-0.033727, 6);
  });

  it("Should calculate the implied volatility for a derivative call", () => {
    expect(
      blacknscholes.impliedVolatility(
        derivative.stock_price,
        derivative.strike,
        derivative.interest_rate,
        derivative.expiration_days,
        1.02,
        "call"
      )
    ).toBeCloseTo(0.9619, 4);
  });

  it("Should calculate the implied volatility for a derivative call", () => {
    expect(
      blacknscholes.impliedVolatility(
        derivative.stock_price,
        derivative.strike,
        derivative.interest_rate,
        derivative.expiration_days,
        1.02,
        "put"
      )
    ).toBeCloseTo(0.9619, 4);
  });
});
