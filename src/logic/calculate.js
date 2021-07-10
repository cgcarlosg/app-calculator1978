import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const result = data;
  const ops = ['+', 'X', '-', '÷', '='];

  if (total && !next) {
    result.operation = buttonName;
  }

  if (buttonName === 'AC') {
    result.total = '';
    result.next = '';
    result.operation = '';
  }

  if (buttonName === '+/-') {
    if (total && !next) {
      result.total = total * -1;
    }

    if (next) {
      result.next = next * -1;
    }
  }

  if (buttonName === '.') {
    if (!total && !next) {
      result.total = '0.';
    }

    if (total && !next && total.indexOf('.') === -1) {
      result.total = `${total}.`;
    }

    if (next && next.indexOf('.') === -1) {
      result.next = `${next}.`;
    }
  }

  if (ops.includes(buttonName)) {
    const eq = buttonName === '=' ? '' : buttonName;
    result.total = operate(total, next, operation);
    result.operation = eq;
  }

  return result;
};

export default calculate;
