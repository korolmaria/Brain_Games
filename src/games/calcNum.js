import getResult from '../index.js';
import generateRandom from '../funcs.js';

const questionOfGame = 'What is the result of the expression?';

export const calculate = (num1, num2, sign) => {
  let answer = 0;
  switch (sign) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      break;
  }
  return answer;
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
