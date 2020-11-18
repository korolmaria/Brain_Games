/* eslint-disable default-case */
import promptly from 'promptly';

export const MIN = 0;
export const MAX = 100;

const askNameUser = async () => {
  const nameUser = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};
export default askNameUser;

export const randomInteger = (num1, num2) => {
  const rand = num1 + Math.random() * (num2 + 1 - num1);
  return Math.floor(rand);
};
