export const questionCalc = 'What is the result of the expression?';

export const getString = (num1, num2, sign = '') => {
  const stringForCalc = `${num1} ${sign} ${num2}`;
  return stringForCalc;
};

export function resultCalculate(num1, num2, sign) {
  let resultCalc = 0;
  switch (sign) {
    case '+':
      resultCalc = num1 + num2;
      break;
    case '-':
      resultCalc = num1 - num2;
      break;
    case '*':
      resultCalc = num1 * num2;
      break;
    default:
      break;
  }
  return resultCalc;
}
