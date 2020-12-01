import getResult from '../index.js';
import generateRandom from '../random.js';

const questionOfGame = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const isEven = (number) => number % 2 === 0;

const generateData = () => {
  const randNumber = generateRandom();
  const question = String(randNumber);
  const rightAnswer = isEven(randNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const generateResultGame = () => getResult(questionOfGame, generateData);
export default generateResultGame;
