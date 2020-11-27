import getResult from '../index.js';
import generateRandom from '../funcs.js';

const questionOfGame = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const isEven = (number) => {
  const answer = (number % 2) === 0 ? 'yes' : 'no';
  return answer;
};

const generateResult = () => {
  const randNumber = generateRandom();
  const question = String(randNumber);
  const rightAnswer = isEven(randNumber);
  return [question, rightAnswer];
};

const generateResultGame = () => getResult(questionOfGame, generateResult);
export default generateResultGame;
