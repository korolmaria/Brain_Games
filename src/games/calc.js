import getResult from '../index.js';
import generateRandom from '../random.js';

const questionOfGame = 'What is the result of the expression?';

const calculate = (num1, num2, sign) => {
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

function generateData() {
  const signs = ['+', '-', '*'];
  const randIndex = generateRandom(0, signs.length - 1);
  const randNum1 = generateRandom();
  const randNum2 = generateRandom();
  const sign = signs[randIndex];
  const question = `${randNum1} ${sign} ${randNum2}`;
  const rightAnswer = calculate(randNum1, randNum2, sign);
  return [question, String(rightAnswer)];
}

const generateResultGame = () => getResult(questionOfGame, generateData);
export default generateResultGame;
