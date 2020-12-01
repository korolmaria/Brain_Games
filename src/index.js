import readlineSync from 'readline-sync';

const COUNT_ROUNDS = 3;

const getResult = (questionOfGame, generateData) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);
  console.log(questionOfGame);
  for (let i = 0; i < COUNT_ROUNDS; i += 1) {
    const [question, rightAnswer] = generateData();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default getResult;
