import getResult from '../index.js';
import generateRandom from '../funcs.js';

const questionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateResult = () => {
  const randNumber = generateRandom();
  const question = String(randNumber);
  const rightAnswer = isPrime(randNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const generateResultGame = () => getResult(questionOfGame, generateResult);
export default generateResultGame;
