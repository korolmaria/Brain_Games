import readlineSync from 'readline-sync';

const randomInteger = () => Math.floor(1 + 10 * Math.random());

const isEvenNumber = (num) => {
  const answer = (num % 2) === 0 ? 'yes' : 'no';
  return answer;
};

const askEvenNumber = () => {
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello! ${nameUser}\nAnswer "yes" if the number is even, otherwise answer "no".`);
  let countRightAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNum = randomInteger();
    console.log(`Question: ${randomNum}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === isEvenNumber(randomNum)) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${isEvenNumber(randomNum)}'.
            Let's try again, ${nameUser}!`);
    }
  }
  if (countRightAnswer === 3) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};
export default askEvenNumber;
