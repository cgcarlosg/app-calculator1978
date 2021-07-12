import operate from './operate';

const operations = ['+', '−', '÷', '×', '='];

const calculate = ({
  total, next, operation,
}, buttonName) => {
  let result;

  if (total === 'Math Error') {
    result = { total: null, next, operation };
    return result;
  }

  if (buttonName in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']) {
    result = { total, next: next == null ? buttonName : next + buttonName, operation };
    return result;
  }

  if (buttonName === '.' && String(next).indexOf('.') === -1) {
    result = { total, next: next == null ? '0.' : next + buttonName, operation };
  } else if (String(next).indexOf('.') >= 0) {
    result = { total, next, operation };
  }

  if (operations.includes(buttonName)) {
    operations.forEach(() => {
      if (total === null) {
        result = {
          total: next,
          next: null,
          operation: buttonName,
        };
      } else {
        result = { total, next, operation };
      }
    });
  }

  if (total !== null && next !== null && operations.includes(buttonName) && buttonName !== '=') {
    result = operate(total, next, operation);
    result = { total: result.next, next: null, operation: buttonName };
    return result;
  }

  if (total !== null && next === null && operation && buttonName !== '=' && buttonName !== '±' && buttonName !== 'AC') {
    result = { total, next, operation: buttonName };
    return result;
  }

  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }

  if (buttonName === '%') {
    result = operate(total, next, buttonName);
    result.operation = operation;
    return result;
  }

  if (buttonName === '=' && total === null) {
    result = { total, next, operation: null };
    return result;
  }

  if (buttonName === '±') {
    if (operation === '−') {
      result = { total, next, operation: '+' };
    } else if (operation === '+') {
      result = { total, next, operation: '−' };
    } else {
      result = { total, next: next * -1, operation };
    }
    return result;
  }

  if (result.next !== null) {
    if (buttonName === '=') {
      result = operate(result.total, result.next, result.operation);
      result.operation = null;
      return result;
    }
  }

  return result;
};

export default calculate;
