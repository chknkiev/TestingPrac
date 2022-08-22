function calculator(a, b, symbol) {
  if(symbol === '+') {
    return a += b;
  } else if(symbol === '-') {
    return a -= b;
  } else if(symbol === '*') {
    return a *= b;
  } else {
    return a /= b;
  }
}

module.exports = calculator;
