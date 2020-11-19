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

export const getArray = (minLength = 1, maxLength = 1) => {
  const lengthArray = randomInteger(minLength, maxLength);
  const progresNumSum = randomInteger(MIN, MAX);
  const numStart = randomInteger(MIN, MAX);
  const arr = [];
  for (let i = 0; i < lengthArray; i += 1) {
    arr[i] = (i === 0) ? numStart : arr[i - 1] + progresNumSum;
  }
  return arr;
};

export const getString = (arrNum, sign = ' ') => arrNum.join(sign);
