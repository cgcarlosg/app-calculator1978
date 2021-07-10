import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  let result;

  if (operation === '+') {
    total = Big(numberOne).plus(numberTwo).toString();
    result = { total: null, next: total, operation };
  }

  if (operation === '-') {
    total = Big(numberOne).minus(numberTwo).toString();
    result = { total: null, next: total, operation };
  }

  if (operation === '÷') {
    if (numberTwo === '0') {
      result = { total: 'Math Error', next: null, operation };
    } else {
      total = Big(numberOne).div(numberTwo).toString();
      result = { total: null, next: total, operation };
    }
  }

  if (operation === 'X') {
    total = Big(numberOne).times(numberTwo).toString();
    result = { total: null, next: total, operation };
  }

  if (operation === '%') {
    if (numberOne === null) {
      total = Big(numberOne).div(100).toString();
      result = { total, next: null, operation };
    }
    if (numberTwo === null && numberOne != null) {
      total = Big(numberTwo).div(100).toString();
      result = { total, next: null, operation };
    }
  }

  return result;
};

export default operate;
