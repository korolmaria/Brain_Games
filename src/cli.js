import promptly from 'promptly';

const askNameUser = async () => {
  const nameUser = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export default askNameUser;
