import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  let result;
  let next;
  let one;
  let two;

  if (numberOne != null && numberTwo != null) {
    one = Big(numberOne);
    two = Big(numberTwo);
  }

  if (operation === '+') {
    total = one.plus(two).toString();
    result = { total: null, next: total, operation };
  }

  if (operation === '−') {
    total = one.minus(two).toString();
    result = { total: null, next: total, operation };
  }

  if (operation === '÷') {
    if (numberTwo === '0') {
      result = { total: 'Math Error', next: null, operation };
    } else {
      total = one.div(two).toString();
      result = { total: null, next: total, operation };
    }
  }

  if (operation === '×') {
    total = one.times(two).toString();
    result = { total: null, next: total, operation };
  }

  if (operation === '%') {
    next = Big(numberTwo).div(100).toString();
    result = { total: numberOne, next, operation };
  }

  return result;
};

export default operate;
