import getResult from '../index.js';
import generateRandom from '../funcs.js';

const questionOfGame = 'What is the result of the expression?';

export const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

function generateResult() {
  const signs = ['+', '-', '*'];
  const randIndex = generateRandom(0, signs.length - 1);
  const randNum1 = generateRandom();
  const randNum2 = generateRandom();
  const numbers = [randNum1, randNum2];
  const sign = signs[randIndex];
  const question = numbers.join(` ${sign} `);
  const rightAnswer = calculate(randNum1, randNum2, sign);
  return [question, String(rightAnswer)];
}

const generateResultGame = () => getResult(questionOfGame, generateResult);
export default generateResultGame;
