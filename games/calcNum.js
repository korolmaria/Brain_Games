export const questionCalc = 'What is the result of the expression?';

const signs = ['+', '-', '*'];
export const getString = (num1, num2, randomInd) => {
  const sign = signs[randomInd];
  const stringForCalc = `${num1} ${sign} ${num2}`;
  return stringForCalc;
};

export function resultCalculate(num1, num2, randomInd) {
  const sign = signs[randomInd];
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
