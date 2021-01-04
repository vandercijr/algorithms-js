"use strict";
/**
 * Arquivo: cholesky.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of cholesky decomposition and solver for linear equation systems
 * Data: 30/11/2020
 *
 */
export const cholesky = input => {  
  const n = input.length
  let i,j,k, sum=0, p=[]

  for (i=0;i<n;i++) {
    for (j=i;j<n;j++) {
      for (sum=input[i][j],k=i-1;k>=0;k--) sum -= input[i][k]*input[j][k]
      if (i == j) {
        if (sum <= 0.0) throw "cholesky composition failed"
        p[i] = Math.sqrt(sum)
      } else  a[j][i]=sum/p[i]
    }
  }

  return {a: a, d: p}
}

const choleskySolver = (a, d, b) => {  
  const n = a.length
  let i,k, sum=0, x=[]

  for (i=0;i<n;i++) {
    for (sum=b[i],k=i-1;k>=0;k--) sum -= a[i][k]*x[k]
    x[i]=sum/d[i]
  }
  console.log('x1 ', x)
  for (i=n;i>=0;i--) {
    for (sum=x[i],k=i+1;k<n;k++) sum -= a[k][i]*x[k]
    x[i]=sum/d[i];
  }
}
