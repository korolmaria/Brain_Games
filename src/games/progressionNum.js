import getResult from '../index.js';
import generateRandom from '../funcs.js';

const questionOfGame = 'What number is missing in the progression?';

const generateRow = (minLength, maxLength) => {
  const numbers = [];
  const lengthArray = generateRandom(minLength, maxLength);
  const progresNumSum = generateRandom();
  const numStart = generateRandom();
  for (let i = 0; i < lengthArray; i += 1) {
    numbers[i] = (i === 0) ? numStart : numbers[i - 1] + progresNumSum;
  }
  return numbers;
};

const generateQuestion = (numbers, randomIndex) => {
  const itemsForQuestion = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (i !== randomIndex) {
      itemsForQuestion.push(numbers[i]);
    } else itemsForQuestion.push('..');
  }
  return itemsForQuestion.join(' ');
};

const generateResult = () => {
  const minLength = 5;
  const maxLength = 10;
  const numbers = generateRow(minLength, maxLength);
  const randIndex = generateRandom(0, numbers.length);
  const question = generateQuestion(numbers, randIndex);
  const rightAnswer = numbers[randIndex];
  return [question, String(rightAnswer)];
};

const generateResultGame = () => getResult(questionOfGame, generateResult);
export default generateResultGame;
